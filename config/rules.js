// Description: This file contains rules to toggle logs or cleaning operations off/on

export const rules = {
    clean: {
        // Element & Attribute Cleaning
        cleanElementAttributes: true,      // Remove 'style' attributes from divs, spans, etc.
        cleanTableAttributes: true,        // Remove deprecated attributes from tables
        cleanTextElements: true,           // Remove 'style' & 'width' from text elements
        cleanImageAttributes: true,        // Remove unnecessary image attributes & fix img wrappers
        
        // Content Transformation
        removeEmptyTags: true,             // Remove empty HTML tags
        removeContentBodyInnerTags: true,  // Remove wrapper tags within .content-body
        removeJQueryScript: true,          // Remove jQuery script tag
        removeRolePresentation: true,      // Remove role="presentation" attributes
        removeTargetAttributes: true,      // Remove target="_self" and target="_new"
        
        // Content Matching
        matchTitleToH1: false,              // Ensure <title> matches <h1> (add to 'options' PR in future)
    },
    
    log: {
        // Head Section Checks
        checkHead: {
            checkDoctype: true,            // Verify <!DOCTYPE html>
            checkHtmlLang: true,           // Verify <html lang="en">
            checkJquery: true,             // Detect deprecated jQuery script
        },
        
        // Header Check
        checkHeader: true,                 // Verify <header class="header"> exists
        
        // First Column Check
        checkFirstColumn: true,            // Verify #content-wrapper or #first-column exists
        
        // Content Body Checks
        checkContentBody: {
            checkNestedElements: true,     // Detect invalid nested elements in .content-body
            checkValidParent: true,        // Verify .content-body has valid parent
        },
        
        // Deprecated Elements Check
        checkDeprecated: {
            checkDeprecatedClass: true,    // Detect deprecated CSS classes
            checkDeprecatedId: true,       // Detect deprecated IDs
            checkScriptTagsLocation: true, // Verify scripts are in <head>
        },
        
        // Media Checks
        checkMedia: {
            checkIframeTitles: true,       // Verify iframe titles
            checkIframes: true,            // Verify iframe wrapper structure
            checkImgAttributes: true,      // Verify image alt attributes & attributes
            checkImgParent: true,          // Verify images aren't wrapped in <p> tags
        },
        
        // Text & Semantic Checks
        checkText: {
            checkHeadingSemantics: true,   // Verify heading hierarchy
            checkTables: true,             // Verify table structure & display-lg class
            checkTitleAndH1: true,         // Verify <title> matches <h1>
            checkSingleH1: true,           // Verify only one <h1> exists
        },
        
        // Special Pages
        checkIframeOnlyPages: true,        // Run special checks for iframe-only pages
    }
}