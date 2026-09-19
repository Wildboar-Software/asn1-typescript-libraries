/**
 * Directory `Name` used as `Provider.nameProvider` and
 * `NameProduct.modelName` (ISO/IEC 29120-1:2022 Clause 6.4.2). Clause
 * 6.4.2.2 cites ISO/IEC 9592-2; Annex A imports this type from ITU-T
 * X.501 InformationFramework.
 */
export {
    type Name,
    _decode_Name,
    _encode_Name,
} from "@wildboar/x500/InformationFramework";
