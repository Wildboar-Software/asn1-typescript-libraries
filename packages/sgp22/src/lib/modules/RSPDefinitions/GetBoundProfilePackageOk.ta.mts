/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
// export { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
import { BoundProfilePackage, _decode_BoundProfilePackage, _encode_BoundProfilePackage } from "../RSPDefinitions/BoundProfilePackage.ta.mjs";
// export { BoundProfilePackage, _decode_BoundProfilePackage, _encode_BoundProfilePackage } from "../RSPDefinitions/BoundProfilePackage.ta.mjs";


/**
 * @summary GetBoundProfilePackageOk
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetBoundProfilePackageOk ::= SEQUENCE {
 *     transactionId [0] TransactionId,
 *     boundProfilePackage [54] BoundProfilePackage
 * }
 * ```
 * 
 * @class
 */
export
class GetBoundProfilePackageOk {
    constructor (
        /**
         * @summary `transactionId`.
         * @public
         * @readonly
         */
        readonly transactionId: TransactionId,
        /**
         * @summary `boundProfilePackage`.
         * @public
         * @readonly
         */
        readonly boundProfilePackage: BoundProfilePackage
    ) {}

    /**
     * @summary Restructures an object into a GetBoundProfilePackageOk
     * @description
     * 
     * This takes an `object` and converts it to a `GetBoundProfilePackageOk`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetBoundProfilePackageOk`.
     * @returns {GetBoundProfilePackageOk}
     */
    public static _from_object (_o: { [_K in keyof (GetBoundProfilePackageOk)]: (GetBoundProfilePackageOk)[_K] }): GetBoundProfilePackageOk {
        return new GetBoundProfilePackageOk(_o.transactionId, _o.boundProfilePackage);
    }


}

/**
 * @summary The Leading Root Component Types of GetBoundProfilePackageOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetBoundProfilePackageOk: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("boundProfilePackage", false, $.hasTag(_TagClass.context, 54))
];

/**
 * @summary The Trailing Root Component Types of GetBoundProfilePackageOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetBoundProfilePackageOk: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetBoundProfilePackageOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetBoundProfilePackageOk: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetBoundProfilePackageOk: $.ASN1Decoder<GetBoundProfilePackageOk> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetBoundProfilePackageOk
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetBoundProfilePackageOk (el: _Element): GetBoundProfilePackageOk {
    if (!_cached_decoder_for_GetBoundProfilePackageOk) { _cached_decoder_for_GetBoundProfilePackageOk = function (el: _Element): GetBoundProfilePackageOk {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GetBoundProfilePackageOk contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "transactionId";
    sequence[1].name = "boundProfilePackage";
    let transactionId!: TransactionId;
    let boundProfilePackage!: BoundProfilePackage;
    transactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(sequence[0]);
    boundProfilePackage = $._decode_implicit<BoundProfilePackage>(() => _decode_BoundProfilePackage)(sequence[1]);
    return new GetBoundProfilePackageOk(
        transactionId,
        boundProfilePackage,

    );
}; }
    return _cached_decoder_for_GetBoundProfilePackageOk(el);
}

let _cached_encoder_for_GetBoundProfilePackageOk: $.ASN1Encoder<GetBoundProfilePackageOk> | null = null;

/**
 * @summary Encodes a(n) GetBoundProfilePackageOk into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetBoundProfilePackageOk, encoded as an ASN.1 Element.
 */
export
function _encode_GetBoundProfilePackageOk (value: GetBoundProfilePackageOk, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetBoundProfilePackageOk) { _cached_encoder_for_GetBoundProfilePackageOk = function (value: GetBoundProfilePackageOk, elGetter: $.ASN1Encoder<GetBoundProfilePackageOk>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TransactionId, $.BER)(value.transactionId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 54, () => _encode_BoundProfilePackage, $.BER)(value.boundProfilePackage, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetBoundProfilePackageOk(value, elGetter);
}


/* eslint-enable */
