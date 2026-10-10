/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UDPInformation
 * @description
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
         * @summary `length`.
         * @public
         * @readonly
         */
        readonly length: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `checkSum`.
         * @public
         * @readonly
         */
        readonly checkSum: OPTIONAL<OCTET_STRING>
    ) {
        if (this.sourcePort !== undefined && (this.sourcePort.length < 2 || this.sourcePort.length > 2)) {
            throw new ASN1SizeError("UDPInformation.sourcePort violates SIZE constraint");
        }
        if (this.destinationPort !== undefined && (this.destinationPort.length < 2 || this.destinationPort.length > 2)) {
            throw new ASN1SizeError("UDPInformation.destinationPort violates SIZE constraint");
        }
        if (this.length !== undefined && (this.length.length < 2 || this.length.length > 2)) {
            throw new ASN1SizeError("UDPInformation.length violates SIZE constraint");
        }
        if (this.checkSum !== undefined && (this.checkSum.length < 2 || this.checkSum.length > 2)) {
            throw new ASN1SizeError("UDPInformation.checkSum violates SIZE constraint");
        }
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
        "sourcePort": (_el: _Element): void => { sourcePort = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "destinationPort": (_el: _Element): void => { destinationPort = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "length": (_el: _Element): void => { length = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "checkSum": (_el: _Element): void => { checkSum = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.sourcePort === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.sourcePort, $.BER)),
            /* IF_ABSENT  */ ((value.destinationPort === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.destinationPort, $.BER)),
            /* IF_ABSENT  */ ((value.length === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.length, $.BER)),
            /* IF_ABSENT  */ ((value.checkSum === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.checkSum, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UDPInformation(value, elGetter);
}


/* eslint-enable */
