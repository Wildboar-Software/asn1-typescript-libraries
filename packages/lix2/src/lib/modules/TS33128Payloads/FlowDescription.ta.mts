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
import { IPAddressOrRangeOrAny, _decode_IPAddressOrRangeOrAny, _encode_IPAddressOrRangeOrAny } from "../TS33128Payloads/IPAddressOrRangeOrAny.ta.mjs";
// export { IPAddressOrRangeOrAny, _decode_IPAddressOrRangeOrAny, _encode_IPAddressOrRangeOrAny } from "../TS33128Payloads/IPAddressOrRangeOrAny.ta.mjs";
import { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";
// export { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";
import { NextLayerProtocolOrAny, _decode_NextLayerProtocolOrAny, _encode_NextLayerProtocolOrAny } from "../TS33128Payloads/NextLayerProtocolOrAny.ta.mjs";
// export { NextLayerProtocolOrAny, _decode_NextLayerProtocolOrAny, _encode_NextLayerProtocolOrAny } from "../TS33128Payloads/NextLayerProtocolOrAny.ta.mjs";


/**
 * @summary FlowDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FlowDescription ::= SEQUENCE
 * {
 *     sourceIPAddress       [1] IPAddressOrRangeOrAny,
 *     destinationIPAddress  [2] IPAddressOrRangeOrAny,
 *     sourcePortNumber      [3] PortNumber OPTIONAL,
 *     destinationPortNumber [4] PortNumber OPTIONAL,
 *     protocol              [5] NextLayerProtocolOrAny
 * }
 * ```
 * 
 * @class
 */
export
class FlowDescription {
    constructor (
        /**
         * @summary `sourceIPAddress`.
         * @public
         * @readonly
         */
        readonly sourceIPAddress: IPAddressOrRangeOrAny,
        /**
         * @summary `destinationIPAddress`.
         * @public
         * @readonly
         */
        readonly destinationIPAddress: IPAddressOrRangeOrAny,
        /**
         * @summary `sourcePortNumber`.
         * @public
         * @readonly
         */
        readonly sourcePortNumber: OPTIONAL<PortNumber>,
        /**
         * @summary `destinationPortNumber`.
         * @public
         * @readonly
         */
        readonly destinationPortNumber: OPTIONAL<PortNumber>,
        /**
         * @summary `protocol`.
         * @public
         * @readonly
         */
        readonly protocol: NextLayerProtocolOrAny
    ) {}

    /**
     * @summary Restructures an object into a FlowDescription
     * @description
     * 
     * This takes an `object` and converts it to a `FlowDescription`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FlowDescription`.
     * @returns {FlowDescription}
     */
    public static _from_object (_o: { [_K in keyof (FlowDescription)]: (FlowDescription)[_K] }): FlowDescription {
        return new FlowDescription(_o.sourceIPAddress, _o.destinationIPAddress, _o.sourcePortNumber, _o.destinationPortNumber, _o.protocol);
    }


}

/**
 * @summary The Leading Root Component Types of FlowDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FlowDescription: $.ComponentSpec[] = [
    new $.ComponentSpec("sourceIPAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("destinationIPAddress", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sourcePortNumber", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("destinationPortNumber", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("protocol", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of FlowDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FlowDescription: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FlowDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FlowDescription: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FlowDescription: $.ASN1Decoder<FlowDescription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FlowDescription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FlowDescription (el: _Element): FlowDescription {
    if (!_cached_decoder_for_FlowDescription) { _cached_decoder_for_FlowDescription = function (el: _Element): FlowDescription {
    let sourceIPAddress!: IPAddressOrRangeOrAny;
    let destinationIPAddress!: IPAddressOrRangeOrAny;
    let sourcePortNumber: OPTIONAL<PortNumber>;
    let destinationPortNumber: OPTIONAL<PortNumber>;
    let protocol!: NextLayerProtocolOrAny;
    const callbacks: $.DecodingMap = {
        "sourceIPAddress": (_el: _Element): void => { sourceIPAddress = $._decode_explicit<IPAddressOrRangeOrAny>(() => _decode_IPAddressOrRangeOrAny)(_el); },
        "destinationIPAddress": (_el: _Element): void => { destinationIPAddress = $._decode_explicit<IPAddressOrRangeOrAny>(() => _decode_IPAddressOrRangeOrAny)(_el); },
        "sourcePortNumber": (_el: _Element): void => { sourcePortNumber = $._decode_implicit<PortNumber>(() => _decode_PortNumber)(_el); },
        "destinationPortNumber": (_el: _Element): void => { destinationPortNumber = $._decode_implicit<PortNumber>(() => _decode_PortNumber)(_el); },
        "protocol": (_el: _Element): void => { protocol = $._decode_explicit<NextLayerProtocolOrAny>(() => _decode_NextLayerProtocolOrAny)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FlowDescription,
        _extension_additions_list_spec_for_FlowDescription,
        _root_component_type_list_2_spec_for_FlowDescription,
        undefined,
    );
    return new FlowDescription(
        sourceIPAddress,
        destinationIPAddress,
        sourcePortNumber,
        destinationPortNumber,
        protocol
    );
}; }
    return _cached_decoder_for_FlowDescription(el);
}

let _cached_encoder_for_FlowDescription: $.ASN1Encoder<FlowDescription> | null = null;

/**
 * @summary Encodes a(n) FlowDescription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FlowDescription, encoded as an ASN.1 Element.
 */
export
function _encode_FlowDescription (value: FlowDescription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FlowDescription) { _cached_encoder_for_FlowDescription = function (value: FlowDescription, elGetter: $.ASN1Encoder<FlowDescription>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IPAddressOrRangeOrAny, $.BER)(value.sourceIPAddress, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_IPAddressOrRangeOrAny, $.BER)(value.destinationIPAddress, $.BER),
            /* IF_ABSENT  */ ((value.sourcePortNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_PortNumber, $.BER)(value.sourcePortNumber, $.BER)),
            /* IF_ABSENT  */ ((value.destinationPortNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_PortNumber, $.BER)(value.destinationPortNumber, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 5, () => _encode_NextLayerProtocolOrAny, $.BER)(value.protocol, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FlowDescription(value, elGetter);
}


/* eslint-enable */
