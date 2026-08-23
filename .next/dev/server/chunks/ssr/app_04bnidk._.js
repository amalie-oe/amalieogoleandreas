module.exports = [
"[project]/app/apple-icon--metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$apple$2d$icon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/apple-icon.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)");
;
;
const imageModule = {
    contentType: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$apple$2d$icon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contentType"],
    size: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$apple$2d$icon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"]
};
async function __TURBOPACK__default__export__(props) {
    const { __metadata_id__: _, ...params } = await props.params;
    const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fillMetadataSegment"])("/", params, "apple-icon", false);
    function getImageMetadata(imageMetadata, idParam) {
        const data = {
            alt: imageMetadata.alt,
            type: imageMetadata.contentType || 'image/png',
            url: imageUrl + (idParam ? '/' + idParam : '') + '?' + "a5cc332bbe8d426a"
        };
        const { size } = imageMetadata;
        if (size) {
            data.sizes = `${size.width}x${size.height}`;
        }
        return data;
    }
    return [
        getImageMetadata(imageModule, '')
    ];
}
}),
"[project]/app/apple-icon--metadata.js [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/apple-icon--metadata.js [app-rsc] (ecmascript)"));
}),
"[project]/app/apple-icon.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contentType",
    ()=>contentType,
    "default",
    ()=>AppleIcon,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/og.js [app-rsc] (ecmascript)");
;
;
const size = {
    width: 180,
    height: 180
};
const contentType = "image/png";
const lighthouse = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'>
  <rect width='180' height='180' fill='#38414F'/>
  <polygon points='90,46 170,18 170,74' fill='#D8D8D6' opacity='0.13'/>
  <polygon points='90,46 10,18 10,74' fill='#D8D8D6' opacity='0.09'/>
  <ellipse cx='90' cy='150' rx='54' ry='11' fill='#45505F'/>
  <polygon points='79,60 101,60 108,146 72,146' fill='#D8D8D6'/>
  <polygon points='76.1,96 103.9,96 105.1,110 74.9,110' fill='#67717E'/>
  <polygon points='73.8,124 106.2,124 107.4,138 72.6,138' fill='#67717E'/>
  <rect x='73' y='54' width='34' height='7' rx='2' fill='#45505F'/>
  <rect x='80' y='38' width='20' height='17' fill='#45505F'/>
  <circle cx='90' cy='46' r='14' fill='#F2EFE8' opacity='0.35'/>
  <circle cx='90' cy='46' r='5.5' fill='#F7F3EA'/>
  <polygon points='77,38 90,24 103,38' fill='#67717E'/>
  <circle cx='90' cy='22' r='2.6' fill='#ADA69B'/>
</svg>`;
const dataUri = `data:image/svg+xml,${encodeURIComponent(lighthouse)}`;
function AppleIcon() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ImageResponse"](/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            height: "100%",
            display: "flex"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            width: "180",
            height: "180",
            src: dataUri
        }, void 0, false, {
            fileName: "[project]/app/apple-icon.js",
            lineNumber: 28,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/apple-icon.js",
        lineNumber: 27,
        columnNumber: 7
    }, this), {
        ...size
    });
}
}),
];

//# sourceMappingURL=app_04bnidk._.js.map