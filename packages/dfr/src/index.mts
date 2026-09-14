/**
 * @packageDocumentation
 *
 * TypeScript encodings of ISO/IEC 10166 Document Filing and Retrieval (DFR)
 * ASN.1 modules and ISO/IEC 10031-2 Distributed Office Referenced Data
 * Transfer (DOR). Import from `@wildboar/dfr`. Per-module subpaths remain
 * available.
 *
 * Abstract service, attributes, and OIDs: ISO/IEC 10166-1:1991 (Cor.1–Cor.4).
 * Access protocol: ISO/IEC 10166-2:1991 (Cor.1–Cor.2). Directory types
 * (`Attribute`, `Filter`, `DistinguishedName`) are re-exported from
 * `@wildboar/x500`. Remote Operations types (`OPERATION`, `ERROR`, `Code`,
 * `InvokeId`) are re-exported from `@wildboar/rose`. `PresentationAddress` is
 * imported from `@wildboar/x500/SelectedAttributeTypes`.
 *
 * `Priority` is the DFR ENUMERATED (`low` / `medium` / `high`), not the ROSE
 * INTEGER. `ID`, `id_mod`, and `id_mod_object_identifiers` come from
 * `DFRObjectIdentifiers`; the protocol-module copies are on
 * `@wildboar/dfr/DFRProtocolObjectIdentifiers`. The AccessRights short name
 * `read` is omitted because it collides with the `read` OPERATION; use
 * `AccessRights_read`.
 */
export * from "./lib/modules/DFRAbstractService/index.mjs";
export * from "./lib/modules/DFRAccessProtocol/index.mjs";
export * from "./lib/modules/DFRBasicAttributes/index.mjs";
export * from "./lib/modules/DFRExtensionAttributes/index.mjs";
export * from "./lib/modules/DFRObjectIdentifiers/index.mjs";
export * from "./lib/modules/DOR-definition/index.mjs";
export * from "./lib/modules/InformationFramework/index.mjs";
export * from "./lib/modules/DirectoryAbstractService/index.mjs";
export {
    id_ac,
    id_ac_dfr_access,
    id_ac_dfr_reliable_access,
    id_are_dfrse,
    id_as,
    id_as_acse,
    id_as_dfr_ext_attr,
    id_as_dfrse,
    id_ase,
    id_dfr_protocol,
    id_mod_access_protocol,
} from "./lib/modules/DFRProtocolObjectIdentifiers/index.mjs";
export * from "./lib/modules/Remote-Operations-Abstract-Syntaxes/index.mjs";
export * from "./lib/modules/Remote-Operations-Generic-ROS-PDUs/index.mjs";
export * from "./lib/modules/Remote-Operations-Information-Objects-extensions/index.mjs";
export * from "./lib/modules/Remote-Operations-Realizations/index.mjs";
export * from "./lib/modules/Remote-Operations-Useful-Definitions/index.mjs";
export {
    type CONNECTION_PACKAGE,
    type CONTRACT,
    type Code,
    _decode_Code,
    _encode_Code,
    type ERROR,
    type OPERATION,
    type OPERATION_PACKAGE,
    type ROS_OBJECT_CLASS,
} from "./lib/modules/Remote-Operations-Information-Objects/index.mjs";
