/* eslint-disable */
import {
    BIT_STRING,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary TCPInformation
 * @description
 *
 * Fields from the TCP header of the target packet (IETF RFC 793), as
 * used by a header report or a summary report (ETSI TS 102 232-3
 * V3.9.1, clauses 6.2.3.4 and 6.2.4). Each populated value is a copy
 * of the corresponding octets, in the same byte order.
 *
 * On a summary report, populate only the source and destination ports
 * and omit the other fields (table 4, clause 6.2.4.2). Annex D treats
 * those ports as IRI when the CSP uses them for its own service, and
 * otherwise as user data that belongs in CC. If IPsec protects the
 * packet, TCP information is not available (clause D.1).
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
    /**
     * @summary `sourcePort`.
     * @description
     *
     * TCP source port. Part of the flow identity (clause 6.2.4.2). Annex D
     * defines a TCP flow by the socket pair, and a flow start by SYN.
     *
     * @public
     * @readonly
     */
    readonly sourcePort: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `destinationPort`.
     * @description
     *
     * TCP destination port. Part of the flow identity (clause 6.2.4.2).
     *
     * @public
     * @readonly
     */
    readonly destinationPort: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sequenceNumber`.
     * @description
     *
     * Copy of this TCP header field (IETF RFC 793). Same byte order as on
     * the wire. Omit it on a summary report; only the ports identify the
     * flow (clause 6.2.4.2).
     *
     * @public
     * @readonly
     */
    readonly sequenceNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `ackNumber`.
     * @description
     *
     * Copy of this TCP header field (IETF RFC 793). Same byte order as on
     * the wire. Omit it on a summary report; only the ports identify the
     * flow (clause 6.2.4.2).
     *
     * @public
     * @readonly
     */
    readonly ackNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `dataOffset`.
     * @description
     *
     * The first 4 bits of the data-offset nibble (clause 8). Copy of the
     * relevant bits (clause 6.2.3.4). Omit on a summary report.
     *
     * @public
     * @readonly
     */
    readonly dataOffset: OPTIONAL<BIT_STRING>;
    /**
     * @summary `controlBits`.
     * @description
     *
     * The right-most 6 TCP control bits (clause 8). The ECN bits defined
     * in IETF RFC 3168 and IETF RFC 3540 are not included
     * (clause 6.2.3.4). Omit on a summary report. Annex D uses FIN and RST
     * to detect the end of a TCP flow.
     *
     * @public
     * @readonly
     */
    readonly controlBits: OPTIONAL<BIT_STRING>;
    /**
     * @summary `windowSize`.
     * @description
     *
     * Copy of this TCP header field (IETF RFC 793). Same byte order as on
     * the wire. Omit it on a summary report; only the ports identify the
     * flow (clause 6.2.4.2).
     *
     * @public
     * @readonly
     */
    readonly windowSize: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `checkSum`.
     * @description
     *
     * Copy of this TCP header field (IETF RFC 793). Same byte order as on
     * the wire. Omit it on a summary report; only the ports identify the
     * flow (clause 6.2.4.2).
     *
     * @public
     * @readonly
     */
    readonly checkSum: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `urgentPointer`.
     * @description
     *
     * Copy of this TCP header field (IETF RFC 793). Same byte order as on
     * the wire. Omit it on a summary report; only the ports identify the
     * flow (clause 6.2.4.2).
     *
     * @public
     * @readonly
     */
    readonly urgentPointer: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `options`.
     * @description
     *
     * Copy of this TCP header field (IETF RFC 793). Same byte order as on
     * the wire. Omit it on a summary report; only the ports identify the
     * flow (clause 6.2.4.2).
     *
     * @public
     * @readonly
     */
    readonly options: OPTIONAL<OCTET_STRING>;

    constructor (
        sourcePort: OPTIONAL<OCTET_STRING>,
        destinationPort: OPTIONAL<OCTET_STRING>,
        sequenceNumber: OPTIONAL<OCTET_STRING>,
        ackNumber: OPTIONAL<OCTET_STRING>,
        dataOffset: OPTIONAL<BIT_STRING>,
        controlBits: OPTIONAL<BIT_STRING>,
        windowSize: OPTIONAL<OCTET_STRING>,
        checkSum: OPTIONAL<OCTET_STRING>,
        urgentPointer: OPTIONAL<OCTET_STRING>,
        options: OPTIONAL<OCTET_STRING>
    ) {
        this.sourcePort = sourcePort;
        this.destinationPort = destinationPort;
        this.sequenceNumber = sequenceNumber;
        this.ackNumber = ackNumber;
        this.dataOffset = dataOffset;
        this.controlBits = controlBits;
        this.windowSize = windowSize;
        this.checkSum = checkSum;
        this.urgentPointer = urgentPointer;
        this.options = options;
    }

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
        "sourcePort": (_el: _Element): void => {
            sourcePort = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (sourcePort.length < 2 || sourcePort.length > 2) {
                throw new ASN1SizeError("TCPInformation.sourcePort violates SIZE constraint");
            }
        },
        "destinationPort": (_el: _Element): void => {
            destinationPort = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (destinationPort.length < 2 || destinationPort.length > 2) {
                throw new ASN1SizeError("TCPInformation.destinationPort violates SIZE constraint");
            }
        },
        "sequenceNumber": (_el: _Element): void => {
            sequenceNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (sequenceNumber.length < 4 || sequenceNumber.length > 4) {
                throw new ASN1SizeError("TCPInformation.sequenceNumber violates SIZE constraint");
            }
        },
        "ackNumber": (_el: _Element): void => {
            ackNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (ackNumber.length < 4 || ackNumber.length > 4) {
                throw new ASN1SizeError("TCPInformation.ackNumber violates SIZE constraint");
            }
        },
        "dataOffset": (_el: _Element): void => {
            dataOffset = $._decode_implicit<BIT_STRING>(() => $._decodeBitString)(_el);
            if (dataOffset.length < 4 || dataOffset.length > 4) {
                throw new ASN1SizeError("TCPInformation.dataOffset violates SIZE constraint");
            }
        },
        "controlBits": (_el: _Element): void => {
            controlBits = $._decode_implicit<BIT_STRING>(() => $._decodeBitString)(_el);
            if (controlBits.length < 6 || controlBits.length > 6) {
                throw new ASN1SizeError("TCPInformation.controlBits violates SIZE constraint");
            }
        },
        "windowSize": (_el: _Element): void => {
            windowSize = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (windowSize.length < 2 || windowSize.length > 2) {
                throw new ASN1SizeError("TCPInformation.windowSize violates SIZE constraint");
            }
        },
        "checkSum": (_el: _Element): void => {
            checkSum = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (checkSum.length < 2 || checkSum.length > 2) {
                throw new ASN1SizeError("TCPInformation.checkSum violates SIZE constraint");
            }
        },
        "urgentPointer": (_el: _Element): void => {
            urgentPointer = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (urgentPointer.length < 2 || urgentPointer.length > 2) {
                throw new ASN1SizeError("TCPInformation.urgentPointer violates SIZE constraint");
            }
        },
        "options": (_el: _Element): void => {
            options = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (options.length > 40) {
                throw new ASN1SizeError("TCPInformation.options violates SIZE constraint");
            }
        },
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
    const _components: _Element[] = new Array(10);
    let _components_i = 0;
    if (value.sourcePort !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.sourcePort, $.BER);
    }
    if (value.destinationPort !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.destinationPort, $.BER);
    }
    if (value.sequenceNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.sequenceNumber, $.BER);
    }
    if (value.ackNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.ackNumber, $.BER);
    }
    if (value.dataOffset !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBitString, $.BER)(value.dataOffset, $.BER);
    }
    if (value.controlBits !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeBitString, $.BER)(value.controlBits, $.BER);
    }
    if (value.windowSize !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.windowSize, $.BER);
    }
    if (value.checkSum !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.checkSum, $.BER);
    }
    if (value.urgentPointer !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.urgentPointer, $.BER);
    }
    if (value.options !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.options, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TCPInformation(value, elGetter);
}


/* eslint-enable */
