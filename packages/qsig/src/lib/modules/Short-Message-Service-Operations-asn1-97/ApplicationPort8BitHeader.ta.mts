/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ApplicationPort8BitHeader
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplicationPort8BitHeader ::= SEQUENCE {
 *     destination8BitPort INTEGER (0..255),
 *     originator8BitPort INTEGER (0..255)
 * }
 * ```
 * 
 * @class
 */
export
class ApplicationPort8BitHeader {
    /**
     * @summary `destination8BitPort`.
     * @public
     * @readonly
     */
    readonly destination8BitPort: INTEGER;
    /**
     * @summary `originator8BitPort`.
     * @public
     * @readonly
     */
    readonly originator8BitPort: INTEGER;

    constructor (
        destination8BitPort: INTEGER,
        originator8BitPort: INTEGER
    ) {
        this.destination8BitPort = destination8BitPort;
        this.originator8BitPort = originator8BitPort;
    
        if ((typeof destination8BitPort === "bigint" ? (destination8BitPort < 0n || destination8BitPort > 255n) : (destination8BitPort < 0 || destination8BitPort > 255))) {
            throw new ASN1OverflowError("ApplicationPort8BitHeader.destination8BitPort violates INTEGER constraint");
        }
        if ((typeof originator8BitPort === "bigint" ? (originator8BitPort < 0n || originator8BitPort > 255n) : (originator8BitPort < 0 || originator8BitPort > 255))) {
            throw new ASN1OverflowError("ApplicationPort8BitHeader.originator8BitPort violates INTEGER constraint");
        }
    }

    /**
     * @summary Restructures an object into a ApplicationPort8BitHeader
     * @description
     * 
     * This takes an `object` and converts it to a `ApplicationPort8BitHeader`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ApplicationPort8BitHeader`.
     * @returns {ApplicationPort8BitHeader}
     */
    public static _from_object (_o: { [_K in keyof (ApplicationPort8BitHeader)]: (ApplicationPort8BitHeader)[_K] }): ApplicationPort8BitHeader {
        return new ApplicationPort8BitHeader(_o.destination8BitPort, _o.originator8BitPort);
    }

}

/**
 * @summary The Leading Root Component Types of ApplicationPort8BitHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ApplicationPort8BitHeader: $.ComponentSpec[] = [
    new $.ComponentSpec("destination8BitPort", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("originator8BitPort", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of ApplicationPort8BitHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ApplicationPort8BitHeader: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ApplicationPort8BitHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ApplicationPort8BitHeader: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ApplicationPort8BitHeader: $.ASN1Decoder<ApplicationPort8BitHeader> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationPort8BitHeader
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ApplicationPort8BitHeader (el: _Element): ApplicationPort8BitHeader {
    if (!_cached_decoder_for_ApplicationPort8BitHeader) { _cached_decoder_for_ApplicationPort8BitHeader = function (el: _Element): ApplicationPort8BitHeader {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ApplicationPort8BitHeader contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "destination8BitPort";
    sequence[1].name = "originator8BitPort";
    const destination8BitPort: INTEGER = $._decodeInteger(sequence[0]);
    const originator8BitPort: INTEGER = $._decodeInteger(sequence[1]);
    return new ApplicationPort8BitHeader(
        destination8BitPort,
        originator8BitPort,

    );
}; }
    return _cached_decoder_for_ApplicationPort8BitHeader(el);
}

let _cached_encoder_for_ApplicationPort8BitHeader: $.ASN1Encoder<ApplicationPort8BitHeader> | null = null;

/**
 * @summary Encodes a(n) ApplicationPort8BitHeader into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationPort8BitHeader, encoded as an ASN.1 Element.
 */
export
function _encode_ApplicationPort8BitHeader (value: ApplicationPort8BitHeader, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ApplicationPort8BitHeader) { _cached_encoder_for_ApplicationPort8BitHeader = function (value: ApplicationPort8BitHeader, _elGetter: $.ASN1Encoder<ApplicationPort8BitHeader>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encodeInteger(value.destination8BitPort, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.originator8BitPort, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_ApplicationPort8BitHeader(value, elGetter);
}

/* eslint-enable */
