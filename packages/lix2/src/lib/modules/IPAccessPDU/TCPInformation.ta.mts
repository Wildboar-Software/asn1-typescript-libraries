/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    OCTET_STRING,
    BIT_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TCPInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TCPInformation ::= SEQUENCE
 * {
 *     sourcePort          [0] OCTET STRING (SIZE (2)) OPTIONAL,
 *     destinationPort     [1] OCTET STRING (SIZE (2)) OPTIONAL,
 *     sequenceNumber      [2] OCTET STRING (SIZE (4)) OPTIONAL,
 *     ackNumber           [3] OCTET STRING (SIZE (4)) OPTIONAL,
 *     dataOffset          [4] BIT STRING (SIZE (4)) OPTIONAL,
 *         -- First 4 bits
 *     controlBits         [5] BIT STRING (SIZE (6)) OPTIONAL,
 *         -- Last 6 bits
 *     windowSize          [6] OCTET STRING (SIZE (2)) OPTIONAL,
 *     checkSum            [7] OCTET STRING (SIZE (2)) OPTIONAL,
 *     urgentPointer       [8] OCTET STRING (SIZE (2)) OPTIONAL,
 *     options             [9] OCTET STRING (SIZE (0..40)) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TCPInformation {
    constructor (
        /**
         * @summary `sourcePort`.
         * @public
         * @readonly
         */
        readonly sourcePort: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `destinationPort`.
         * @public
         * @readonly
         */
        readonly destinationPort: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `sequenceNumber`.
         * @public
         * @readonly
         */
        readonly sequenceNumber: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `ackNumber`.
         * @public
         * @readonly
         */
        readonly ackNumber: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `dataOffset`.
         * @public
         * @readonly
         */
        readonly dataOffset: OPTIONAL<BIT_STRING>,
        /**
         * @summary `controlBits`.
         * @public
         * @readonly
         */
        readonly controlBits: OPTIONAL<BIT_STRING>,
        /**
         * @summary `windowSize`.
         * @public
         * @readonly
         */
        readonly windowSize: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `checkSum`.
         * @public
         * @readonly
         */
        readonly checkSum: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `urgentPointer`.
         * @public
         * @readonly
         */
        readonly urgentPointer: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `options`.
         * @public
         * @readonly
         */
        readonly options: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a TCPInformation
     * @description
     * 
     * This takes an `object` and converts it to a `TCPInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TCPInformation`.
     * @returns {TCPInformation}
     */
    public static _from_object (_o: { [_K in keyof (TCPInformation)]: (TCPInformation)[_K] }): TCPInformation {
        return new TCPInformation(_o.sourcePort, _o.destinationPort, _o.sequenceNumber, _o.ackNumber, _o.dataOffset, _o.controlBits, _o.windowSize, _o.checkSum, _o.urgentPointer, _o.options);
    }


}

/**
 * @summary The Leading Root Component Types of TCPInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TCPInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("sourcePort", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("destinationPort", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sequenceNumber", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ackNumber", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("dataOffset", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("controlBits", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("windowSize", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("checkSum", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("urgentPointer", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("options", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of TCPInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TCPInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TCPInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TCPInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TCPInformation: $.ASN1Decoder<TCPInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TCPInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TCPInformation (el: _Element): TCPInformation {
    if (!_cached_decoder_for_TCPInformation) { _cached_decoder_for_TCPInformation = function (el: _Element): TCPInformation {
    let sourcePort: OPTIONAL<OCTET_STRING>;
    let destinationPort: OPTIONAL<OCTET_STRING>;
    let sequenceNumber: OPTIONAL<OCTET_STRING>;
    let ackNumber: OPTIONAL<OCTET_STRING>;
    let dataOffset: OPTIONAL<BIT_STRING>;
    let controlBits: OPTIONAL<BIT_STRING>;
    let windowSize: OPTIONAL<OCTET_STRING>;
    let checkSum: OPTIONAL<OCTET_STRING>;
    let urgentPointer: OPTIONAL<OCTET_STRING>;
    let options: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "sourcePort": (_el: _Element): void => { sourcePort = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "destinationPort": (_el: _Element): void => { destinationPort = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sequenceNumber": (_el: _Element): void => { sequenceNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "ackNumber": (_el: _Element): void => { ackNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "dataOffset": (_el: _Element): void => { dataOffset = $._decode_implicit<BIT_STRING>(() => $._decodeBitString)(_el); },
        "controlBits": (_el: _Element): void => { controlBits = $._decode_implicit<BIT_STRING>(() => $._decodeBitString)(_el); },
        "windowSize": (_el: _Element): void => { windowSize = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "checkSum": (_el: _Element): void => { checkSum = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "urgentPointer": (_el: _Element): void => { urgentPointer = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "options": (_el: _Element): void => { options = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TCPInformation,
        _extension_additions_list_spec_for_TCPInformation,
        _root_component_type_list_2_spec_for_TCPInformation,
        undefined,
    );
    return new TCPInformation(
        sourcePort,
        destinationPort,
        sequenceNumber,
        ackNumber,
        dataOffset,
        controlBits,
        windowSize,
        checkSum,
        urgentPointer,
        options
    );
}; }
    return _cached_decoder_for_TCPInformation(el);
}

let _cached_encoder_for_TCPInformation: $.ASN1Encoder<TCPInformation> | null = null;

/**
 * @summary Encodes a(n) TCPInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TCPInformation, encoded as an ASN.1 Element.
 */
export
function _encode_TCPInformation (value: TCPInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TCPInformation) { _cached_encoder_for_TCPInformation = function (value: TCPInformation, elGetter: $.ASN1Encoder<TCPInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.sourcePort === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.sourcePort, $.BER)),
            /* IF_ABSENT  */ ((value.destinationPort === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.destinationPort, $.BER)),
            /* IF_ABSENT  */ ((value.sequenceNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.sequenceNumber, $.BER)),
            /* IF_ABSENT  */ ((value.ackNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.ackNumber, $.BER)),
            /* IF_ABSENT  */ ((value.dataOffset === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeBitString, $.BER)(value.dataOffset, $.BER)),
            /* IF_ABSENT  */ ((value.controlBits === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeBitString, $.BER)(value.controlBits, $.BER)),
            /* IF_ABSENT  */ ((value.windowSize === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.windowSize, $.BER)),
            /* IF_ABSENT  */ ((value.checkSum === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.checkSum, $.BER)),
            /* IF_ABSENT  */ ((value.urgentPointer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.urgentPointer, $.BER)),
            /* IF_ABSENT  */ ((value.options === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.options, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TCPInformation(value, elGetter);
}


/* eslint-enable */
