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
import { IPAddr, _decode_IPAddr, _encode_IPAddr } from "../TS33128Payloads/IPAddr.ta.mjs";
// export { IPAddr, _decode_IPAddr, _encode_IPAddr } from "../TS33128Payloads/IPAddr.ta.mjs";
import { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";
// export { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";


/**
 * @summary BBFTunnelInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BBFTunnelInformation ::= SEQUENCE
 * {
 *     hENBTransportLayerAddress [1] IPAddr,
 *     uDPPortNumber             [2] PortNumber OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class BBFTunnelInformation {
    constructor (
        /**
         * @summary `hENBTransportLayerAddress`.
         * @public
         * @readonly
         */
        readonly hENBTransportLayerAddress: IPAddr,
        /**
         * @summary `uDPPortNumber`.
         * @public
         * @readonly
         */
        readonly uDPPortNumber: OPTIONAL<PortNumber>
    ) {}

    /**
     * @summary Restructures an object into a BBFTunnelInformation
     * @description
     * 
     * This takes an `object` and converts it to a `BBFTunnelInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BBFTunnelInformation`.
     * @returns {BBFTunnelInformation}
     */
    public static _from_object (_o: { [_K in keyof (BBFTunnelInformation)]: (BBFTunnelInformation)[_K] }): BBFTunnelInformation {
        return new BBFTunnelInformation(_o.hENBTransportLayerAddress, _o.uDPPortNumber);
    }


}

/**
 * @summary The Leading Root Component Types of BBFTunnelInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BBFTunnelInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("hENBTransportLayerAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("uDPPortNumber", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of BBFTunnelInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BBFTunnelInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BBFTunnelInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BBFTunnelInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BBFTunnelInformation: $.ASN1Decoder<BBFTunnelInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BBFTunnelInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BBFTunnelInformation (el: _Element): BBFTunnelInformation {
    if (!_cached_decoder_for_BBFTunnelInformation) { _cached_decoder_for_BBFTunnelInformation = function (el: _Element): BBFTunnelInformation {
    let hENBTransportLayerAddress!: IPAddr;
    let uDPPortNumber: OPTIONAL<PortNumber>;
    const callbacks: $.DecodingMap = {
        "hENBTransportLayerAddress": (_el: _Element): void => { hENBTransportLayerAddress = $._decode_implicit<IPAddr>(() => _decode_IPAddr)(_el); },
        "uDPPortNumber": (_el: _Element): void => { uDPPortNumber = $._decode_implicit<PortNumber>(() => _decode_PortNumber)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BBFTunnelInformation,
        _extension_additions_list_spec_for_BBFTunnelInformation,
        _root_component_type_list_2_spec_for_BBFTunnelInformation,
        undefined,
    );
    return new BBFTunnelInformation(
        hENBTransportLayerAddress,
        uDPPortNumber
    );
}; }
    return _cached_decoder_for_BBFTunnelInformation(el);
}

let _cached_encoder_for_BBFTunnelInformation: $.ASN1Encoder<BBFTunnelInformation> | null = null;

/**
 * @summary Encodes a(n) BBFTunnelInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BBFTunnelInformation, encoded as an ASN.1 Element.
 */
export
function _encode_BBFTunnelInformation (value: BBFTunnelInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BBFTunnelInformation) { _cached_encoder_for_BBFTunnelInformation = function (value: BBFTunnelInformation, elGetter: $.ASN1Encoder<BBFTunnelInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IPAddr, $.BER)(value.hENBTransportLayerAddress, $.BER),
            /* IF_ABSENT  */ ((value.uDPPortNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_PortNumber, $.BER)(value.uDPPortNumber, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BBFTunnelInformation(value, elGetter);
}


/* eslint-enable */
