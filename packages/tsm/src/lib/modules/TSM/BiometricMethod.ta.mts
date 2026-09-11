/* eslint-disable */
import {
    UTF8String,
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
import { BiometricType, _decode_BiometricType, _encode_BiometricType } from "../TSM/BiometricType.ta.mjs";

import { BSP_BFP_Schema, _decode_BSP_BFP_Schema, _encode_BSP_BFP_Schema } from "../TSM/BSP-BFP-Schema.ta.mjs";

import { NetworkAuthenticationModel, _enum_for_NetworkAuthenticationModel, _decode_NetworkAuthenticationModel, _encode_NetworkAuthenticationModel } from "../TSM/NetworkAuthenticationModel.ta.mjs";



/**
 * @summary BiometricMethod
 * @description
 *
 * One offered or selected biometric configuration: modality, BioAPI
 * BSP/BFP, authentication model, and TTP URI when a TTP model is used
 * ([IETF RFC 3986]). ITU-T Rec. X.1084 (05/2008) §10.1.2, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricMethod ::= SEQUENCE {
 * biometricType                   BiometricType,
 * biometricFunctionProvider       BSP-BFP-Schema,
 * networkAuthenticationModel      NetworkAuthenticationModel,
 * thirdPartyInfo                  UTF8String
 * }
 * ```
 * 
 * @class
 */
export
class BiometricMethod {
    constructor (
        /**
         * @summary `biometricType`.
         * @description
         *
         * BioAPI `BioAPI-BIR-BIOMETRIC-TYPE` (face, finger, iris, …).
         * [ISO/IEC 19784-1]; X.1084 §10.1.2.
         *
         * @public
         * @readonly
         */
        readonly biometricType: BiometricType,
        /**
         * @summary `biometricFunctionProvider`.
         * @description
         *
         * BSP or BFP schema identifying capture / preprocess / compare
         * functions. [ISO/IEC 19784-1]; X.1084 §10.1.2, §11.1 Table 3.
         *
         * @public
         * @readonly
         */
        readonly biometricFunctionProvider: BSP_BFP_Schema,
        /**
         * @summary `networkAuthenticationModel`.
         * @description
         *
         * One of the nine models in clause 7 (local, download, attached,
         * centre, TTP variants, outsourcing). X.1084 §7, §10.1.2.
         *
         * @public
         * @readonly
         */
        readonly networkAuthenticationModel: NetworkAuthenticationModel,
        /**
         * @summary `thirdPartyInfo`.
         * @description
         *
         * Required for TTP models: TTP network address as a URI
         * ([IETF RFC 3986]). X.1084 §10.1.2.
         *
         * @public
         * @readonly
         */
        readonly thirdPartyInfo: UTF8String
    ) {}

    /**
     * @summary Restructures an object into a BiometricMethod
     * @description
     * 
     * This takes an `object` and converts it to a `BiometricMethod`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BiometricMethod`.
     * @returns {BiometricMethod}
     */
    public static _from_object (_o: { [_K in keyof (BiometricMethod)]: (BiometricMethod)[_K] }): BiometricMethod {
        return new BiometricMethod(_o.biometricType, _o.biometricFunctionProvider, _o.networkAuthenticationModel, _o.thirdPartyInfo);
    }

        /**
         * @summary The enum used as the type of the component `networkAuthenticationModel`
         * @public
         * @static
         */

    public static _enum_for_networkAuthenticationModel = _enum_for_NetworkAuthenticationModel;
}

/**
 * @summary The Leading Root Component Types of BiometricMethod
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BiometricMethod: $.ComponentSpec[] = [
    new $.ComponentSpec("biometricType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("biometricFunctionProvider", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("networkAuthenticationModel", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("thirdPartyInfo", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of BiometricMethod
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BiometricMethod: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BiometricMethod
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BiometricMethod: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BiometricMethod: $.ASN1Decoder<BiometricMethod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricMethod
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BiometricMethod (el: _Element): BiometricMethod {
    if (!_cached_decoder_for_BiometricMethod) { _cached_decoder_for_BiometricMethod = function (el: _Element): BiometricMethod {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("BiometricMethod contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "biometricType";
    sequence[1].name = "biometricFunctionProvider";
    sequence[2].name = "networkAuthenticationModel";
    sequence[3].name = "thirdPartyInfo";
    let biometricType!: BiometricType;
    let biometricFunctionProvider!: BSP_BFP_Schema;
    let networkAuthenticationModel!: NetworkAuthenticationModel;
    let thirdPartyInfo!: UTF8String;
    biometricType = _decode_BiometricType(sequence[0]);
    biometricFunctionProvider = _decode_BSP_BFP_Schema(sequence[1]);
    networkAuthenticationModel = _decode_NetworkAuthenticationModel(sequence[2]);
    thirdPartyInfo = $._decodeUTF8String(sequence[3]);
    return new BiometricMethod(
        biometricType,
        biometricFunctionProvider,
        networkAuthenticationModel,
        thirdPartyInfo,

    );
}; }
    return _cached_decoder_for_BiometricMethod(el);
}

let _cached_encoder_for_BiometricMethod: $.ASN1Encoder<BiometricMethod> | null = null;

/**
 * @summary Encodes a(n) BiometricMethod into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricMethod, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricMethod (value: BiometricMethod, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BiometricMethod) { _cached_encoder_for_BiometricMethod = function (value: BiometricMethod): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_BiometricType(value.biometricType, $.BER),
            /* REQUIRED   */ _encode_BSP_BFP_Schema(value.biometricFunctionProvider, $.BER),
            /* REQUIRED   */ _encode_NetworkAuthenticationModel(value.networkAuthenticationModel, $.BER),
            /* REQUIRED   */ $._encodeUTF8String(value.thirdPartyInfo, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BiometricMethod(value, elGetter);
}


/* eslint-enable */
