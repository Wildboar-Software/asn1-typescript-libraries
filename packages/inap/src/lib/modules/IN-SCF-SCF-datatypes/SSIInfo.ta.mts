/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AgreementFeatureIndicator, _decode_AgreementFeatureIndicator, _encode_AgreementFeatureIndicator } from "../IN-SCF-SCF-datatypes/AgreementFeatureIndicator.ta.mjs";
// export { AgreementFeatureIndicator, _decode_AgreementFeatureIndicator, _encode_AgreementFeatureIndicator } from "../IN-SCF-SCF-datatypes/AgreementFeatureIndicator.ta.mjs";
import { STSIInformation, _decode_STSIInformation, _encode_STSIInformation } from "../IN-SCF-SCF-datatypes/STSIInformation.ta.mjs";
// export { STSIInformation, _decode_STSIInformation, _encode_STSIInformation } from "../IN-SCF-SCF-datatypes/STSIInformation.ta.mjs";


/**
 * @summary SSIInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSIInfo ::= SEQUENCE {
 *   agreementFeatureIndicator  [0]  AgreementFeatureIndicator OPTIONAL,
 *   sTSIInformation            [1]  STSIInformation
 * }
 * ```
 * 
 * @class
 */
export
class SSIInfo {
    /**
     * @summary `agreementFeatureIndicator`.
     * @public
     * @readonly
     */
    readonly agreementFeatureIndicator: OPTIONAL<AgreementFeatureIndicator>;
    /**
     * @summary `sTSIInformation`.
     * @public
     * @readonly
     */
    readonly sTSIInformation: STSIInformation;

    constructor (
        agreementFeatureIndicator: OPTIONAL<AgreementFeatureIndicator>,
        sTSIInformation: STSIInformation
    ) {
        this.agreementFeatureIndicator = agreementFeatureIndicator;
        this.sTSIInformation = sTSIInformation;
    }

    /**
     * @summary Restructures an object into a SSIInfo
     * @description
     * 
     * This takes an `object` and converts it to a `SSIInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SSIInfo`.
     * @returns {SSIInfo}
     */
    public static _from_object (_o: { [_K in keyof (SSIInfo)]: (SSIInfo)[_K] }): SSIInfo {
        return new SSIInfo(_o.agreementFeatureIndicator, _o.sTSIInformation);
    }


}

/**
 * @summary The Leading Root Component Types of SSIInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SSIInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("agreementFeatureIndicator", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sTSIInformation", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of SSIInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SSIInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SSIInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SSIInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SSIInfo: $.ASN1Decoder<SSIInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SSIInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SSIInfo (el: _Element): SSIInfo {
    if (!_cached_decoder_for_SSIInfo) { _cached_decoder_for_SSIInfo = function (el: _Element): SSIInfo {
    let agreementFeatureIndicator: OPTIONAL<AgreementFeatureIndicator>;
    let sTSIInformation!: STSIInformation;
    const callbacks: $.DecodingMap = {
        "agreementFeatureIndicator": (_el: _Element): void => { agreementFeatureIndicator = $._decode_explicit<AgreementFeatureIndicator>(() => _decode_AgreementFeatureIndicator)(_el); },
        "sTSIInformation": (_el: _Element): void => { sTSIInformation = $._decode_implicit<STSIInformation>(() => _decode_STSIInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SSIInfo,
        _extension_additions_list_spec_for_SSIInfo,
        _root_component_type_list_2_spec_for_SSIInfo,
        undefined,
    );
    return new SSIInfo(
        agreementFeatureIndicator,
        sTSIInformation
    );
}; }
    return _cached_decoder_for_SSIInfo(el);
}

let _cached_encoder_for_SSIInfo: $.ASN1Encoder<SSIInfo> | null = null;

/**
 * @summary Encodes a(n) SSIInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SSIInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SSIInfo (value: SSIInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SSIInfo) { _cached_encoder_for_SSIInfo = function (value: SSIInfo, elGetter: $.ASN1Encoder<SSIInfo>): _Element {
    const _components: _Element[] = [];
    if (value.agreementFeatureIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_AgreementFeatureIndicator, $.BER)(value.agreementFeatureIndicator, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_STSIInformation, $.BER)(value.sTSIInformation, $.BER));
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SSIInfo(value, elGetter);
}


/* eslint-enable */
