/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { HeaderFlags, HeaderFlags_unused0 /* IMPORTED_LONG_NAMED_BIT */, unused0 /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_return_dns_name /* IMPORTED_LONG_NAMED_BIT */, return_dns_name /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_unused2 /* IMPORTED_LONG_NAMED_BIT */, unused2 /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_unused3 /* IMPORTED_LONG_NAMED_BIT */, unused3 /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_unused4 /* IMPORTED_LONG_NAMED_BIT */, unused4 /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_ds_12_required /* IMPORTED_LONG_NAMED_BIT */, ds_12_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_ds_13_required /* IMPORTED_LONG_NAMED_BIT */, ds_13_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_key_list_support_required /* IMPORTED_LONG_NAMED_BIT */, key_list_support_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_ds_10_required /* IMPORTED_LONG_NAMED_BIT */, ds_10_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_ds_9_required /* IMPORTED_LONG_NAMED_BIT */, ds_9_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_ds_8_required /* IMPORTED_LONG_NAMED_BIT */, ds_8_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_web_service_required /* IMPORTED_LONG_NAMED_BIT */, web_service_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_ds_6_required /* IMPORTED_LONG_NAMED_BIT */, ds_6_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_try_next_closest_site /* IMPORTED_LONG_NAMED_BIT */, try_next_closest_site /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_is_dns_name /* IMPORTED_LONG_NAMED_BIT */, is_dns_name /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_is_flat_name /* IMPORTED_LONG_NAMED_BIT */, is_flat_name /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_only_ldap_needed /* IMPORTED_LONG_NAMED_BIT */, only_ldap_needed /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_avoid_self /* IMPORTED_LONG_NAMED_BIT */, avoid_self /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_good_timeserv_pref /* IMPORTED_LONG_NAMED_BIT */, good_timeserv_pref /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_writable_required /* IMPORTED_LONG_NAMED_BIT */, writable_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_timeserv_required /* IMPORTED_LONG_NAMED_BIT */, timeserv_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_kdc_required /* IMPORTED_LONG_NAMED_BIT */, kdc_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_ip_required /* IMPORTED_LONG_NAMED_BIT */, ip_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_background_only /* IMPORTED_LONG_NAMED_BIT */, background_only /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_pdc_required /* IMPORTED_LONG_NAMED_BIT */, pdc_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_gc_server_required /* IMPORTED_LONG_NAMED_BIT */, gc_server_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_ds_preferred /* IMPORTED_LONG_NAMED_BIT */, ds_preferred /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_ds_required /* IMPORTED_LONG_NAMED_BIT */, ds_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_unused28 /* IMPORTED_LONG_NAMED_BIT */, unused28 /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_unused29 /* IMPORTED_LONG_NAMED_BIT */, unused29 /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_unused30 /* IMPORTED_LONG_NAMED_BIT */, unused30 /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_force_rediscovery /* IMPORTED_LONG_NAMED_BIT */, force_rediscovery /* IMPORTED_SHORT_NAMED_BIT */, _decode_HeaderFlags, _encode_HeaderFlags } from "../Spnego/HeaderFlags.ta.mjs";
// export { HeaderFlags, HeaderFlags_unused0 /* IMPORTED_LONG_NAMED_BIT */, unused0 /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_return_dns_name /* IMPORTED_LONG_NAMED_BIT */, return_dns_name /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_unused2 /* IMPORTED_LONG_NAMED_BIT */, unused2 /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_unused3 /* IMPORTED_LONG_NAMED_BIT */, unused3 /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_unused4 /* IMPORTED_LONG_NAMED_BIT */, unused4 /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_ds_12_required /* IMPORTED_LONG_NAMED_BIT */, ds_12_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_ds_13_required /* IMPORTED_LONG_NAMED_BIT */, ds_13_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_key_list_support_required /* IMPORTED_LONG_NAMED_BIT */, key_list_support_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_ds_10_required /* IMPORTED_LONG_NAMED_BIT */, ds_10_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_ds_9_required /* IMPORTED_LONG_NAMED_BIT */, ds_9_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_ds_8_required /* IMPORTED_LONG_NAMED_BIT */, ds_8_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_web_service_required /* IMPORTED_LONG_NAMED_BIT */, web_service_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_ds_6_required /* IMPORTED_LONG_NAMED_BIT */, ds_6_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_try_next_closest_site /* IMPORTED_LONG_NAMED_BIT */, try_next_closest_site /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_is_dns_name /* IMPORTED_LONG_NAMED_BIT */, is_dns_name /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_is_flat_name /* IMPORTED_LONG_NAMED_BIT */, is_flat_name /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_only_ldap_needed /* IMPORTED_LONG_NAMED_BIT */, only_ldap_needed /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_avoid_self /* IMPORTED_LONG_NAMED_BIT */, avoid_self /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_good_timeserv_pref /* IMPORTED_LONG_NAMED_BIT */, good_timeserv_pref /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_writable_required /* IMPORTED_LONG_NAMED_BIT */, writable_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_timeserv_required /* IMPORTED_LONG_NAMED_BIT */, timeserv_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_kdc_required /* IMPORTED_LONG_NAMED_BIT */, kdc_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_ip_required /* IMPORTED_LONG_NAMED_BIT */, ip_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_background_only /* IMPORTED_LONG_NAMED_BIT */, background_only /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_pdc_required /* IMPORTED_LONG_NAMED_BIT */, pdc_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_gc_server_required /* IMPORTED_LONG_NAMED_BIT */, gc_server_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_ds_preferred /* IMPORTED_LONG_NAMED_BIT */, ds_preferred /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_ds_required /* IMPORTED_LONG_NAMED_BIT */, ds_required /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_unused28 /* IMPORTED_LONG_NAMED_BIT */, unused28 /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_unused29 /* IMPORTED_LONG_NAMED_BIT */, unused29 /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_unused30 /* IMPORTED_LONG_NAMED_BIT */, unused30 /* IMPORTED_SHORT_NAMED_BIT */, HeaderFlags_force_rediscovery /* IMPORTED_LONG_NAMED_BIT */, force_rediscovery /* IMPORTED_SHORT_NAMED_BIT */, _decode_HeaderFlags, _encode_HeaderFlags } from "../Spnego/HeaderFlags.ta.mjs";


/**
 * @summary IAKERB_HEADER
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IAKERB-HEADER ::= SEQUENCE {
 *     -- Note that the tag numbers start at 1, not 0, which would
 *     -- be more conventional for Kerberos.
 *     target-realm      [1] UTF8String,
 *        -- The name of the target realm.
 *     cookie            [2] OCTET STRING OPTIONAL,
 *        -- Opaque data, if sent by the server,
 *        -- MUST be copied by the client verbatim into
 *        -- the next IAKRB_PROXY message.
 *     header-flags      [3] HeaderFlags OPTIONAL,
 *        -- Leveraged by Microsoft implementation of IAKerb
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class IAKERB_HEADER {
    constructor (
        /**
         * @summary `target_realm`.
         * @public
         * @readonly
         */
        readonly target_realm: UTF8String,
        /**
         * @summary `cookie`.
         * @public
         * @readonly
         */
        readonly cookie: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `header_flags`.
         * @public
         * @readonly
         */
        readonly header_flags: OPTIONAL<HeaderFlags>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IAKERB_HEADER
     * @description
     * 
     * This takes an `object` and converts it to a `IAKERB_HEADER`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IAKERB_HEADER`.
     * @returns {IAKERB_HEADER}
     */
    public static _from_object (_o: { [_K in keyof (IAKERB_HEADER)]: (IAKERB_HEADER)[_K] }): IAKERB_HEADER {
        return new IAKERB_HEADER(_o.target_realm, _o.cookie, _o.header_flags, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IAKERB_HEADER
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IAKERB_HEADER: $.ComponentSpec[] = [
    new $.ComponentSpec("target-realm", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cookie", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("header-flags", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of IAKERB_HEADER
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IAKERB_HEADER: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IAKERB_HEADER
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IAKERB_HEADER: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IAKERB_HEADER: $.ASN1Decoder<IAKERB_HEADER> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IAKERB_HEADER
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IAKERB_HEADER (el: _Element): IAKERB_HEADER {
    if (!_cached_decoder_for_IAKERB_HEADER) { _cached_decoder_for_IAKERB_HEADER = function (el: _Element): IAKERB_HEADER {
    let target_realm!: UTF8String;
    let cookie: OPTIONAL<OCTET_STRING>;
    let header_flags: OPTIONAL<HeaderFlags>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "target-realm": (_el: _Element): void => { target_realm = $._decode_explicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "cookie": (_el: _Element): void => { cookie = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "header-flags": (_el: _Element): void => { header_flags = $._decode_explicit<HeaderFlags>(() => _decode_HeaderFlags)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IAKERB_HEADER,
        _extension_additions_list_spec_for_IAKERB_HEADER,
        _root_component_type_list_2_spec_for_IAKERB_HEADER,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IAKERB_HEADER(
        target_realm,
        cookie,
        header_flags,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IAKERB_HEADER(el);
}

let _cached_encoder_for_IAKERB_HEADER: $.ASN1Encoder<IAKERB_HEADER> | null = null;

/**
 * @summary Encodes a(n) IAKERB_HEADER into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IAKERB_HEADER, encoded as an ASN.1 Element.
 */
export
function _encode_IAKERB_HEADER (value: IAKERB_HEADER, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IAKERB_HEADER) { _cached_encoder_for_IAKERB_HEADER = function (value: IAKERB_HEADER, elGetter: $.ASN1Encoder<IAKERB_HEADER>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.target_realm, $.BER),
            /* IF_ABSENT  */ ((value.cookie === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.cookie, $.BER)),
            /* IF_ABSENT  */ ((value.header_flags === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_HeaderFlags, $.BER)(value.header_flags, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IAKERB_HEADER(value, elGetter);
}


/* eslint-enable */
