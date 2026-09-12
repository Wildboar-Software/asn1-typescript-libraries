/* eslint-disable */
import {
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
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";


/**
 * @summary DeleteNamedType_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteNamedType-Response ::= SEQUENCE {
 *    numberMatched          [0] IMPLICIT Unsigned32,
 *    numberDeleted          [1] IMPLICIT Unsigned32
 *    }
 * ```
 * 
 * @class
 */
export
class DeleteNamedType_Response {
    constructor (
        /**
         * @summary `numberMatched`.
         * @public
         * @readonly
         */
        readonly numberMatched: Unsigned32,
        /**
         * @summary `numberDeleted`.
         * @public
         * @readonly
         */
        readonly numberDeleted: Unsigned32
    ) {}

    /**
     * @summary Restructures an object into a DeleteNamedType_Response
     * @description
     * 
     * This takes an `object` and converts it to a `DeleteNamedType_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeleteNamedType_Response`.
     * @returns {DeleteNamedType_Response}
     */
    public static _from_object (_o: { [_K in keyof (DeleteNamedType_Response)]: (DeleteNamedType_Response)[_K] }): DeleteNamedType_Response {
        return new DeleteNamedType_Response(_o.numberMatched, _o.numberDeleted);
    }


}

/**
 * @summary The Leading Root Component Types of DeleteNamedType_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeleteNamedType_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("numberMatched", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("numberDeleted", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of DeleteNamedType_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeleteNamedType_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeleteNamedType_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeleteNamedType_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeleteNamedType_Response: $.ASN1Decoder<DeleteNamedType_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteNamedType_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteNamedType_Response (el: _Element): DeleteNamedType_Response {
    if (!_cached_decoder_for_DeleteNamedType_Response) { _cached_decoder_for_DeleteNamedType_Response = function (el: _Element): DeleteNamedType_Response {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DeleteNamedType-Response contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "numberMatched";
    sequence[1].name = "numberDeleted";
    let numberMatched!: Unsigned32;
    let numberDeleted!: Unsigned32;
    numberMatched = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(sequence[0]);
    numberDeleted = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(sequence[1]);
    return new DeleteNamedType_Response(
        numberMatched,
        numberDeleted,

    );
}; }
    return _cached_decoder_for_DeleteNamedType_Response(el);
}

let _cached_encoder_for_DeleteNamedType_Response: $.ASN1Encoder<DeleteNamedType_Response> | null = null;

/**
 * @summary Encodes a(n) DeleteNamedType_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteNamedType_Response, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteNamedType_Response (value: DeleteNamedType_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteNamedType_Response) { _cached_encoder_for_DeleteNamedType_Response = function (value: DeleteNamedType_Response): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Unsigned32, $.BER)(value.numberMatched, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Unsigned32, $.BER)(value.numberDeleted, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DeleteNamedType_Response(value, elGetter);
}


/* eslint-enable */
