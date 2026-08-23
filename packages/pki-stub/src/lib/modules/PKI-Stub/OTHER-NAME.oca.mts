/* eslint-disable */
import {
    TYPE_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";

/**
 * @summary OTHER-NAME
 * @description
 *
 * Information object class for {@link GeneralName} `otherName`: ASN.1
 * `TYPE-IDENTIFIER` (`&id` plus `&Type`). Encoded as `INSTANCE OF OTHER-NAME`.
 *
 * @interface
 */
export type OTHER_NAME<Type> = TYPE_IDENTIFIER<Type>;

/* eslint-enable */
