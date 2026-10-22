/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CircuitSwitchedAccess
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CircuitSwitchedAccess ::= SEQUENCE {
 *    mSCIdentifier         [0] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ),
 *    callReferenceNumber   [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) )}
 * ```
 * 
 * @class
 */
export
class CircuitSwitchedAccess {
    /**
     * @summary `mSCIdentifier`.
     * @public
     * @readonly
     */
    readonly mSCIdentifier: OCTET_STRING;
    /**
     * @summary `callReferenceNumber`.
     * @public
     * @readonly
     */
    readonly callReferenceNumber: OCTET_STRING;

    constructor (
        mSCIdentifier: OCTET_STRING,
        callReferenceNumber: OCTET_STRING
    ) {
        this.mSCIdentifier = mSCIdentifier;
        this.callReferenceNumber = callReferenceNumber;
    
        if ((this.mSCIdentifier.length < 1 || this.mSCIdentifier.length > 9)) {
            throw new ASN1SizeError("CircuitSwitchedAccess.mSCIdentifier violates SIZE constraint");
        }
        if ((this.callReferenceNumber.length < 1 || this.callReferenceNumber.length > 8)) {
            throw new ASN1SizeError("CircuitSwitchedAccess.callReferenceNumber violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a CircuitSwitchedAccess
     * @description
     * 
     * This takes an `object` and converts it to a `CircuitSwitchedAccess`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CircuitSwitchedAccess`.
     * @returns {CircuitSwitchedAccess}
     */
    public static _from_object (_o: { [_K in keyof (CircuitSwitchedAccess)]: (CircuitSwitchedAccess)[_K] }): CircuitSwitchedAccess {
        return new CircuitSwitchedAccess(_o.mSCIdentifier, _o.callReferenceNumber);
    }


}

/**
 * @summary The Leading Root Component Types of CircuitSwitchedAccess
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CircuitSwitchedAccess: $.ComponentSpec[] = [
    new $.ComponentSpec("mSCIdentifier", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("callReferenceNumber", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CircuitSwitchedAccess
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CircuitSwitchedAccess: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CircuitSwitchedAccess
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CircuitSwitchedAccess: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CircuitSwitchedAccess: $.ASN1Decoder<CircuitSwitchedAccess> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CircuitSwitchedAccess
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CircuitSwitchedAccess (el: _Element): CircuitSwitchedAccess {
    if (!_cached_decoder_for_CircuitSwitchedAccess) { _cached_decoder_for_CircuitSwitchedAccess = function (el: _Element): CircuitSwitchedAccess {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CircuitSwitchedAccess contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mSCIdentifier";
    sequence[1].name = "callReferenceNumber";
    const mSCIdentifier: OCTET_STRING = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    const callReferenceNumber: OCTET_STRING = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new CircuitSwitchedAccess(
        mSCIdentifier,
        callReferenceNumber,

    );
}; }
    return _cached_decoder_for_CircuitSwitchedAccess(el);
}

let _cached_encoder_for_CircuitSwitchedAccess: $.ASN1Encoder<CircuitSwitchedAccess> | null = null;

/**
 * @summary Encodes a(n) CircuitSwitchedAccess into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CircuitSwitchedAccess, encoded as an ASN.1 Element.
 */
export
function _encode_CircuitSwitchedAccess (value: CircuitSwitchedAccess, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CircuitSwitchedAccess) { _cached_encoder_for_CircuitSwitchedAccess = function (value: CircuitSwitchedAccess, _elGetter: $.ASN1Encoder<CircuitSwitchedAccess>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.mSCIdentifier, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.callReferenceNumber, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CircuitSwitchedAccess(value, elGetter);
}


/* eslint-enable */
