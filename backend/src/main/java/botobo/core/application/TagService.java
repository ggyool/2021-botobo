package botobo.core.application;

import botobo.core.domain.tag.Tag;
import botobo.core.domain.tag.TagName;
import botobo.core.domain.tag.TagRepository;
import botobo.core.domain.tag.Tags;
import botobo.core.dto.tag.TagRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class TagService {

    private final TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public Tags convertTags(List<TagRequest> tagRequests) {
        List<Tag> tags = tagRequests.stream()
                .map(TagRequest::getName)
                .map(TagName::of)
                .distinct()
                .map(tagName -> tagRepository.findByTagName(tagName).orElse(Tag.of(tagName)))
                .collect(Collectors.toList());
        return Tags.of(tags);
    }
}
