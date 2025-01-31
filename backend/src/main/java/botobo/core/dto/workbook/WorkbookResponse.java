package botobo.core.dto.workbook;

import botobo.core.domain.workbook.Workbook;
import botobo.core.dto.tag.TagResponse;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class WorkbookResponse {

    private Long id;
    private String name;
    private int cardCount;
    private int heartCount;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String author;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Boolean opened;
    private List<TagResponse> tags;

    public static WorkbookResponse of(Workbook workbook) {
        return WorkbookResponse.builder()
                .id(workbook.getId())
                .name(workbook.getName())
                .cardCount(workbook.cardCount())
                .heartCount(workbook.heartCount())
                .author(workbook.author())
                .opened(workbook.isOpened())
                .tags(TagResponse.listOf(workbook.tags()))
                .build();
    }

    public static List<WorkbookResponse> listOf(List<Workbook> workbooks) {
        return workbooks.stream()
                .map(WorkbookResponse::of)
                .collect(Collectors.toList());
    }

    public static List<WorkbookResponse> authorListOf(List<Workbook> workbooks) {
        return workbooks.stream()
                .map(WorkbookResponse::authorOf)
                .collect(Collectors.toList());
    }

    public static WorkbookResponse authorOf(Workbook workbook) {
        return WorkbookResponse.builder()
                .id(workbook.getId())
                .name(workbook.getName())
                .cardCount(workbook.cardCount())
                .heartCount(workbook.heartCount())
                .opened(workbook.isOpened())
                .tags(TagResponse.listOf(workbook.tags()))
                .build();
    }

    public static List<WorkbookResponse> openedListOf(List<Workbook> workbooks) {
        return workbooks.stream()
                .map(WorkbookResponse::openedOf)
                .collect(Collectors.toList());
    }

    private static WorkbookResponse openedOf(Workbook workbook) {
        return WorkbookResponse.builder()
                .id(workbook.getId())
                .name(workbook.getName())
                .cardCount(workbook.cardCount())
                .heartCount(workbook.heartCount())
                .author(workbook.author())
                .tags(TagResponse.listOf(workbook.tags()))
                .build();
    }
}
