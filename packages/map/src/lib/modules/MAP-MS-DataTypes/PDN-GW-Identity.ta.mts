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
import { PDP_Address, _decode_PDP_Address, _encode_PDP_Address } from "../MAP-MS-DataTypes/PDP-Address.ta.mjs";
import { FQDN, _decode_FQDN, _encode_FQDN } from "../MAP-MS-DataTypes/FQDN.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary PDN_GW_Identity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDN-GW-Identity ::= SEQUENCE {
 *     pdn-gw-ipv4-Address    [0] PDP-Address    OPTIONAL,
 *     pdn-gw-ipv6-Address    [1] PDP-Address    OPTIONAL,
 *     pdn-gw-name    [2] FQDN    OPTIONAL,
 *     extensionContainer    [3] ExtensionContainer    OPTIONAL,
 *     ... }
 * ```
 * 
 * @class
 */
export
class PDN_GW_Identity {
    constructor (
        /**
         * @summary `pdn_gw_ipv4_Address`.
         * @public
         * @readonly
         */
        readonly pdn_gw_ipv4_Address: OPTIONAL<PDP_Address>,
        /**
         * @summary `pdn_gw_ipv6_Address`.
         * @public
         * @readonly
         */
        readonly pdn_gw_ipv6_Address: OPTIONAL<PDP_Address>,
        /**
         * @summary `pdn_gw_name`.
         * @public
         * @readonly
         */
        readonly pdn_gw_name: OPTIONAL<FQDN>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PDN_GW_Identity
     * @description
     * 
     * This takes an `object` and converts it to a `PDN_GW_Identity`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PDN_GW_Identity`.
     * @returns {PDN_GW_Identity}
     */
    public static _from_object (_o: { [_K in keyof (PDN_GW_Identity)]: (PDN_GW_Identity)[_K] }): PDN_GW_Identity {
        return new PDN_GW_Identity(_o.pdn_gw_ipv4_Address, _o.pdn_gw_ipv6_Address, _o.pdn_gw_name, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PDN_GW_Identity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PDN_GW_Identity: $.ComponentSpec[] = [
    new $.ComponentSpec("pdn-gw-ipv4-Address", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("pdn-gw-ipv6-Address", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pdn-gw-name", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of PDN_GW_Identity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PDN_GW_Identity: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PDN_GW_Identity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PDN_GW_Identity: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PDN_GW_Identity: $.ASN1Decoder<PDN_GW_Identity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDN_GW_Identity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDN_GW_Identity (el: _Element): PDN_GW_Identity {
    if (!_cached_decoder_for_PDN_GW_Identity) { _cached_decoder_for_PDN_GW_Identity = function (el: _Element): PDN_GW_Identity {
    let pdn_gw_ipv4_Address: OPTIONAL<PDP_Address> = undefined;
    let pdn_gw_ipv6_Address: OPTIONAL<PDP_Address> = undefined;
    let pdn_gw_name: OPTIONAL<FQDN> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "pdn-gw-ipv4-Address": (_el: _Element): void => { pdn_gw_ipv4_Address = $._decode_implicit<PDP_Address>(() => _decode_PDP_Address)(_el); },
        "pdn-gw-ipv6-Address": (_el: _Element): void => { pdn_gw_ipv6_Address = $._decode_implicit<PDP_Address>(() => _decode_PDP_Address)(_el); },
        "pdn-gw-name": (_el: _Element): void => { pdn_gw_name = $._decode_implicit<FQDN>(() => _decode_FQDN)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PDN_GW_Identity,
        _extension_additions_list_spec_for_PDN_GW_Identity,
        _root_component_type_list_2_spec_for_PDN_GW_Identity,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PDN_GW_Identity(
        pdn_gw_ipv4_Address,
        pdn_gw_ipv6_Address,
        pdn_gw_name,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PDN_GW_Identity(el);
}

let _cached_encoder_for_PDN_GW_Identity: $.ASN1Encoder<PDN_GW_Identity> | null = null;

/**
 * @summary Encodes a(n) PDN_GW_Identity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDN_GW_Identity, encoded as an ASN.1 Element.
 */
export
function _encode_PDN_GW_Identity (value: PDN_GW_Identity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDN_GW_Identity) { _cached_encoder_for_PDN_GW_Identity = function (value: PDN_GW_Identity, elGetter: $.ASN1Encoder<PDN_GW_Identity>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.pdn_gw_ipv4_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_PDP_Address, $.BER)(value.pdn_gw_ipv4_Address, $.BER)),
            /* IF_ABSENT  */ ((value.pdn_gw_ipv6_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_PDP_Address, $.BER)(value.pdn_gw_ipv6_Address, $.BER)),
            /* IF_ABSENT  */ ((value.pdn_gw_name === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_FQDN, $.BER)(value.pdn_gw_name, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PDN_GW_Identity(value, elGetter);
}


/* eslint-enable */
