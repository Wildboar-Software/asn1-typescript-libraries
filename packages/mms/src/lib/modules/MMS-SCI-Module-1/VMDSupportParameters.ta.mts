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
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


/**
 * @summary VMDSupportParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VMDSupportParameters ::= SEQUENCE {
 *    localDetail                [0] MMSString,
 *    extendedDerivation         [1] MMSString
 *              -- method used to perform extended derivation
 * }
 * ```
 * 
 * @class
 */
export
class VMDSupportParameters {
    constructor (
        /**
         * @summary `localDetail`.
         * @public
         * @readonly
         */
        readonly localDetail: MMSString,
        /**
         * @summary `extendedDerivation`.
         * @public
         * @readonly
         */
        readonly extendedDerivation: MMSString
    ) {}

    /**
     * @summary Restructures an object into a VMDSupportParameters
     * @description
     * 
     * This takes an `object` and converts it to a `VMDSupportParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VMDSupportParameters`.
     * @returns {VMDSupportParameters}
     */
    public static _from_object (_o: { [_K in keyof (VMDSupportParameters)]: (VMDSupportParameters)[_K] }): VMDSupportParameters {
        return new VMDSupportParameters(_o.localDetail, _o.extendedDerivation);
    }


}

/**
 * @summary The Leading Root Component Types of VMDSupportParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_VMDSupportParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("localDetail", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extendedDerivation", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of VMDSupportParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_VMDSupportParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of VMDSupportParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_VMDSupportParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_VMDSupportParameters: $.ASN1Decoder<VMDSupportParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VMDSupportParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VMDSupportParameters (el: _Element): VMDSupportParameters {
    if (!_cached_decoder_for_VMDSupportParameters) { _cached_decoder_for_VMDSupportParameters = function (el: _Element): VMDSupportParameters {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("VMDSupportParameters contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "localDetail";
    sequence[1].name = "extendedDerivation";
    let localDetail!: MMSString;
    let extendedDerivation!: MMSString;
    localDetail = $._decode_explicit<MMSString>(() => _decode_MMSString)(sequence[0]);
    extendedDerivation = $._decode_explicit<MMSString>(() => _decode_MMSString)(sequence[1]);
    return new VMDSupportParameters(
        localDetail,
        extendedDerivation,

    );
}; }
    return _cached_decoder_for_VMDSupportParameters(el);
}

let _cached_encoder_for_VMDSupportParameters: $.ASN1Encoder<VMDSupportParameters> | null = null;

/**
 * @summary Encodes a(n) VMDSupportParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VMDSupportParameters, encoded as an ASN.1 Element.
 */
export
function _encode_VMDSupportParameters (value: VMDSupportParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VMDSupportParameters) { _cached_encoder_for_VMDSupportParameters = function (value: VMDSupportParameters): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_MMSString, $.BER)(value.localDetail, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_MMSString, $.BER)(value.extendedDerivation, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_VMDSupportParameters(value, elGetter);
}


/* eslint-enable */
