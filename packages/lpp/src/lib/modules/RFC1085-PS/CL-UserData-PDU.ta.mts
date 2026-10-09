/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SessionConnectionIdentifier, _decode_SessionConnectionIdentifier, _encode_SessionConnectionIdentifier } from "../RFC1085-PS/SessionConnectionIdentifier.ta.mjs";


/**
 * @summary CL_UserData_PDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CL-UserData-PDU ::= [6] IMPLICIT SEQUENCE {
 *     reference   SessionConnectionIdentifier,
 *     user-data   [0] ANY -- this is the ASN.1 object it is always in PCI #1
 * }
 * ```
 * 
 * @class
 */
export
class CL_UserData_PDU {
    constructor (
        /**
         * @summary `reference`.
         * @public
         * @readonly
         */
        readonly reference: SessionConnectionIdentifier,
        /**
         * @summary `user_data`.
         * @public
         * @readonly
         */
        readonly user_data: _Element
    ) {}

    /**
     * @summary Restructures an object into a CL_UserData_PDU
     * @description
     * 
     * This takes an `object` and converts it to a `CL_UserData_PDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CL_UserData_PDU`.
     * @returns {CL_UserData_PDU}
     */
    public static _from_object (_o: { [_K in keyof (CL_UserData_PDU)]: (CL_UserData_PDU)[_K] }): CL_UserData_PDU {
        return new CL_UserData_PDU(_o.reference, _o.user_data);
    }


}

/**
 * @summary The Leading Root Component Types of CL_UserData_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CL_UserData_PDU: $.ComponentSpec[] = [
    new $.ComponentSpec("reference", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("user-data", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of CL_UserData_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CL_UserData_PDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CL_UserData_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CL_UserData_PDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CL_UserData_PDU: $.ASN1Decoder<CL_UserData_PDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CL_UserData_PDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CL_UserData_PDU (el: _Element): CL_UserData_PDU {
    if (!_cached_decoder_for_CL_UserData_PDU) { _cached_decoder_for_CL_UserData_PDU = $._decode_implicit<CL_UserData_PDU>(() => function (el: _Element): CL_UserData_PDU {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CL-UserData-PDU contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "reference";
    sequence[1].name = "user-data";
    const reference = _decode_SessionConnectionIdentifier(sequence[0]);
    const user_data = $._decode_explicit<_Element>(() => $._decodeAny)(sequence[1]);
    return new CL_UserData_PDU(
        reference,
        user_data
    );
}); }
    return _cached_decoder_for_CL_UserData_PDU(el);
}

let _cached_encoder_for_CL_UserData_PDU: $.ASN1Encoder<CL_UserData_PDU> | null = null;

/**
 * @summary Encodes a(n) CL_UserData_PDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CL_UserData_PDU, encoded as an ASN.1 Element.
 */
export
function _encode_CL_UserData_PDU (value: CL_UserData_PDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CL_UserData_PDU) { _cached_encoder_for_CL_UserData_PDU = $._encode_implicit(_TagClass.context, 6, () => function (value: CL_UserData_PDU): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SessionConnectionIdentifier(value.reference, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeAny, $.BER)(value.user_data, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_CL_UserData_PDU(value, elGetter);
}


/* eslint-enable */
