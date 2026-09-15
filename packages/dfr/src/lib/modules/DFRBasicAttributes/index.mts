/**
 * @description
 *
 * Mandatory DFR-Basic-Attribute-Set. Every server supports these. ISO/IEC
 * 10166-1:1991 §9.2, Annex D.
 */
export * from "./AccessId.ta.mjs";
export {
    AccessRights,
    AccessRights_extended_read,
    AccessRights_owner,
    AccessRights_read,
    AccessRights_read_modify,
    AccessRights_read_modify_delete,
    _decode_AccessRights,
    _encode_AccessRights,
    _enum_for_AccessRights,
    extended_read,
    owner,
    read_modify,
    read_modify_delete,
} from "./AccessRights.ta.mjs";
export * from "./DfrAccessListElement.ta.mjs";
export * from "./dfr-access-list.oa.mjs";
export * from "./dfr-attributes-create-date-and-time.oa.mjs";
export * from "./dfr-attributes-modified-by.oa.mjs";
export * from "./dfr-attributes-modify-date-and-time.oa.mjs";
export * from "./dfr-content-create-date-and-time.oa.mjs";
export * from "./dfr-content-modified-by.oa.mjs";
export * from "./dfr-content-modify-date-and-time.oa.mjs";
export * from "./dfr-created-by.oa.mjs";
export * from "./dfr-document-type.oa.mjs";
export * from "./dfr-external-location.oa.mjs";
export * from "./dfr-membership-criteria.oa.mjs";
export * from "./dfr-next-versions.oa.mjs";
export * from "./dfr-number-of-group-members.oa.mjs";
export * from "./dfr-object-class.oa.mjs";
export * from "./dfr-ordering.oa.mjs";
export * from "./dfr-parent-identification.oa.mjs";
export * from "./dfr-pathname.oa.mjs";
export * from "./dfr-previous-versions.oa.mjs";
export * from "./dfr-referent-deleted.oa.mjs";
export * from "./dfr-reservation.oa.mjs";
export * from "./dfr-reserved-by.oa.mjs";
export * from "./dfr-resource-limit.oa.mjs";
export * from "./dfr-resource-used.oa.mjs";
export * from "./dfr-title.oa.mjs";
export * from "./dfr-upi.oa.mjs";
export * from "./dfr-version-root.oa.mjs";
export * from "./document-date-and-time.oa.mjs";
export * from "./user-reference-to-other-objects.oa.mjs";
export * from "./user-reference.oa.mjs";
export * from "./version-name.oa.mjs";
