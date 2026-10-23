/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary UDPInformation
 * @description
 *
 * Fields from the UDP header of the target packet (IETF RFC 768), as
 * used by a header report or a summary report (ETSI TS 102 232-3
 * V3.9.1, clauses 6.2.3.5 and 6.2.4). Each populated value is a copy
 * of the corresponding octets, in the same byte order.
 *
 * On a summary report, populate only the source and destination ports
 * and omit the other fields (table 4). Annex D defines a UDP flow by
 * the socket pair: it starts when that pair is first seen and ends
 * after a silent interval. If IPsec protects the packet, UDP
 * information is not available (clause D.1).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDPInformation ::= SEQUENCE
 * {
 *     sourcePort          [0] OCTET STRING (SIZE (2)) OPTIONAL,
 *     destinationPort     [1] OCTET STRING (SIZE (2)) OPTIONAL,
 *     length              [2] OCTET STRING (SIZE (2)) OPTIONAL,
 *     checkSum            [3] OCTET STRING (SIZE (2)) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UDPInformation {
    /**
     * @summary `sourcePort`.
     * @description
     *
     * UDP source port. Part of the flow identity (clause 6.2.4.2).
     *
     * @public
     * @readonly
     */
    readonly sourcePort: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `destinationPort`.
     * @description
     *
     * UDP destination port. Part of the flow identity (clause 6.2.4.2).
     *
     * @public
     * @readonly
     */
    readonly destinationPort: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `length`.
     * @description
     *
     * Copy of this UDP header field (IETF RFC 768). Same byte order as on
     * the wire. Omit it on a summary report; only the ports identify the
     * flow (clause 6.2.4.2).
     *
     * @public
     * @readonly
     */
    readonly length: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `checkSum`.
     * @description
     *
     * Copy of this UDP header field (IETF RFC 768). Same byte order as on
     * the wire. Omit it on a summary report; only the ports identify the
     * flow (clause 6.2.4.2).
     *
     * @public
     * @readonly
     */
    readonly checkSum: OPTIONAL<OCTET_STRING>;

    constructor (
        sourcePort?: OPTIONAL<OCTET_STRING>,
        destinationPort?: OPTIONAL<OCTET_STRING>,
        length?: OPTIONAL<OCTET_STRING>,
        checkSum?: OPTIONAL<OCTET_STRING>
    ) {
        this.sourcePort = sourcePort;
        this.destinationPort = destinationPort;
        this.length = length;
        this.checkSum = checkSum;
    }

    /**
     * @summary Restructures an object into a UDPInformation
     * @description
     * 
     * This takes an `object` and converts it to a `UDPInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UDPInformation`.
     * @returns {UDPInformation}
     */
    public static _from_object (_o: { [_K in keyof (UDPInformation)]: (UDPInformation)[_K] }): UDPInformation {
        return new UDPInformation(_o.sourcePort, _o.destinationPort, _o.length, _o.checkSum);
    }


}

/**
 * @summary The Leading Root Component Types of UDPInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UDPInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("sourcePort", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("destinationPort", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("length", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("checkSum", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of UDPInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UDPInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UDPInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UDPInformation: $.ComponentSpec[] = [

];

let _cached_decoder_for_UDPInformation: $.ASN1Decoder<UDPInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDPInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDPInformation (el: _Element): UDPInformation {
    if (!_cached_decoder_for_UDPInformation) { _cached_decoder_for_UDPInformation = function (el: _Element): UDPInformation {
    let sourcePort: OPTIONAL<OCTET_STRING>;
    let destinationPort: OPTIONAL<OCTET_STRING>;
    let length: OPTIONAL<OCTET_STRING>;
    let checkSum: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "sourcePort": (_el: _Element): void => {
            sourcePort = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (sourcePort.length < 2 || sourcePort.length > 2) {
                throw new ASN1SizeError("UDPInformation.sourcePort violates SIZE constraint");
            }
        },
        "destinationPort": (_el: _Element): void => {
            destinationPort = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (destinationPort.length < 2 || destinationPort.length > 2) {
                throw new ASN1SizeError("UDPInformation.destinationPort violates SIZE constraint");
            }
        },
        "length": (_el: _Element): void => {
            length = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (length.length < 2 || length.length > 2) {
                throw new ASN1SizeError("UDPInformation.length violates SIZE constraint");
            }
        },
        "checkSum": (_el: _Element): void => {
            checkSum = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (checkSum.length < 2 || checkSum.length > 2) {
                throw new ASN1SizeError("UDPInformation.checkSum violates SIZE constraint");
            }
        },
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UDPInformation,
        _extension_additions_list_spec_for_UDPInformation,
        _root_component_type_list_2_spec_for_UDPInformation,
        undefined,
    );
    return new UDPInformation(
        sourcePort,
        destinationPort,
        length,
        checkSum
    );
}; }
    return _cached_decoder_for_UDPInformation(el);
}

let _cached_encoder_for_UDPInformation: $.ASN1Encoder<UDPInformation> | null = null;

/**
 * @summary Encodes a(n) UDPInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDPInformation, encoded as an ASN.1 Element.
 */
export
function _encode_UDPInformation (value: UDPInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDPInformation) { _cached_encoder_for_UDPInformation = function (value: UDPInformation, elGetter: $.ASN1Encoder<UDPInformation>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    if (value.sourcePort !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.sourcePort, $.BER);
    }
    if (value.destinationPort !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.destinationPort, $.BER);
    }
    if (value.length !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.length, $.BER);
    }
    if (value.checkSum !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.checkSum, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_UDPInformation(value, elGetter);
}


/* eslint-enable */
