/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SecurityLabelType1, _decode_SecurityLabelType1, _encode_SecurityLabelType1 } from "../PKIS/SecurityLabelType1.ta.mjs";
// export { SecurityLabelType1, _decode_SecurityLabelType1, _encode_SecurityLabelType1 } from "../PKIS/SecurityLabelType1.ta.mjs";


/**
 * @summary EnterpriseId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EnterpriseId ::= SEQUENCE {
 *  rootLabel [0] IMPLICIT SecurityLabelType1,
 *  registryLabel [1] IMPLICIT SecurityLabelType1,
 *  enterpriseLabel [2] IMPLICIT SEQUENCE SIZE (1..1) OF SecurityLabelType1
 * }
 * ```
 * 
 * @class
 */
export
class EnterpriseId {
    constructor (
        /**
         * @summary `rootLabel`.
         * @public
         * @readonly
         */
        readonly rootLabel: SecurityLabelType1,
        /**
         * @summary `registryLabel`.
         * @public
         * @readonly
         */
        readonly registryLabel: SecurityLabelType1,
        /**
         * @summary `enterpriseLabel`.
         * @public
         * @readonly
         */
        readonly enterpriseLabel: SecurityLabelType1[]
    ) {}

    /**
     * @summary Restructures an object into a EnterpriseId
     * @description
     * 
     * This takes an `object` and converts it to a `EnterpriseId`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EnterpriseId`.
     * @returns {EnterpriseId}
     */
    public static _from_object (_o: { [_K in keyof (EnterpriseId)]: (EnterpriseId)[_K] }): EnterpriseId {
        return new EnterpriseId(_o.rootLabel, _o.registryLabel, _o.enterpriseLabel);
    }


}

/**
 * @summary The Leading Root Component Types of EnterpriseId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EnterpriseId: $.ComponentSpec[] = [
    new $.ComponentSpec("rootLabel", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("registryLabel", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("enterpriseLabel", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EnterpriseId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EnterpriseId: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EnterpriseId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EnterpriseId: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EnterpriseId: $.ASN1Decoder<EnterpriseId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EnterpriseId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EnterpriseId (el: _Element): EnterpriseId {
    if (!_cached_decoder_for_EnterpriseId) { _cached_decoder_for_EnterpriseId = function (el: _Element): EnterpriseId {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("EnterpriseId contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "rootLabel";
    sequence[1].name = "registryLabel";
    sequence[2].name = "enterpriseLabel";
    let rootLabel!: SecurityLabelType1;
    let registryLabel!: SecurityLabelType1;
    let enterpriseLabel!: SecurityLabelType1[];
    rootLabel = $._decode_implicit<SecurityLabelType1>(() => _decode_SecurityLabelType1)(sequence[0]);
    registryLabel = $._decode_implicit<SecurityLabelType1>(() => _decode_SecurityLabelType1)(sequence[1]);
    enterpriseLabel = $._decode_implicit<SecurityLabelType1[]>(() => $._decodeSequenceOf<SecurityLabelType1>(() => _decode_SecurityLabelType1))(sequence[2]);
    return new EnterpriseId(
        rootLabel,
        registryLabel,
        enterpriseLabel,

    );
}; }
    return _cached_decoder_for_EnterpriseId(el);
}

let _cached_encoder_for_EnterpriseId: $.ASN1Encoder<EnterpriseId> | null = null;

/**
 * @summary Encodes a(n) EnterpriseId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnterpriseId, encoded as an ASN.1 Element.
 */
export
function _encode_EnterpriseId (value: EnterpriseId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EnterpriseId) { _cached_encoder_for_EnterpriseId = function (value: EnterpriseId, elGetter: $.ASN1Encoder<EnterpriseId>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SecurityLabelType1, $.BER)(value.rootLabel, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SecurityLabelType1, $.BER)(value.registryLabel, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<SecurityLabelType1>(() => _encode_SecurityLabelType1, $.BER), $.BER)(value.enterpriseLabel, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EnterpriseId(value, elGetter);
}


/* eslint-enable */
