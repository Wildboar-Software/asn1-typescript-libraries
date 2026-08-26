/**
 * @summary Attribute
 * @description
 *
 * Re-export of X.500 `Attribute` used for CMS signed, unsigned,
 * authenticated, and unprotected attributes
 * ([RFC 5652 §5.3](https://datatracker.ietf.org/doc/html/rfc5652#section-5.3)).
 *
 */
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "@wildboar/x500/InformationFramework";
