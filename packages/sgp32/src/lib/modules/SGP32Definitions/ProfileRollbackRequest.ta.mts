/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProfileRollbackRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileRollbackRequest ::= [88] SEQUENCE { -- Tag 'BF58'
 *     refreshFlag BOOLEAN -- indicating whether REFRESH is required
 * }
 * ```
 * 
 * @class
 */
export
class ProfileRollbackRequest {
    constructor (
        /**
         * @summary `refreshFlag`.
         * @public
         * @readonly
         */
        readonly refreshFlag: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a ProfileRollbackRequest
     * @description
     * 
     * This takes an `object` and converts it to a `ProfileRollbackRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProfileRollbackRequest`.
     * @returns {ProfileRollbackRequest}
     */
    public static _from_object (_o: { [_K in keyof (ProfileRollbackRequest)]: (ProfileRollbackRequest)[_K] }): ProfileRollbackRequest {
        return new ProfileRollbackRequest(_o.refreshFlag);
    }


}

/**
 * @summary The Leading Root Component Types of ProfileRollbackRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProfileRollbackRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("refreshFlag", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of ProfileRollbackRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProfileRollbackRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProfileRollbackRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProfileRollbackRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProfileRollbackRequest: $.ASN1Decoder<ProfileRollbackRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileRollbackRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileRollbackRequest (el: _Element): ProfileRollbackRequest {
    if (!_cached_decoder_for_ProfileRollbackRequest) { _cached_decoder_for_ProfileRollbackRequest = $._decode_implicit<ProfileRollbackRequest>(() => function (el: _Element): ProfileRollbackRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("ProfileRollbackRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "refreshFlag";
    let refreshFlag!: BOOLEAN;
    refreshFlag = $._decodeBoolean(sequence[0]);
    return new ProfileRollbackRequest(
        refreshFlag,

    );
}); }
    return _cached_decoder_for_ProfileRollbackRequest(el);
}

let _cached_encoder_for_ProfileRollbackRequest: $.ASN1Encoder<ProfileRollbackRequest> | null = null;

/**
 * @summary Encodes a(n) ProfileRollbackRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileRollbackRequest, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileRollbackRequest (value: ProfileRollbackRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileRollbackRequest) { _cached_encoder_for_ProfileRollbackRequest = $._encode_implicit(_TagClass.context, 88, () => function (value: ProfileRollbackRequest, elGetter: $.ASN1Encoder<ProfileRollbackRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeBoolean(value.refreshFlag, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ProfileRollbackRequest(value, elGetter);
}


/* eslint-enable */
