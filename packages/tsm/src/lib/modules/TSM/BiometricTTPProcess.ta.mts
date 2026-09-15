/* eslint-disable */
import {
    OPTIONAL,
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
import { XtsmTemplate, _decode_XtsmTemplate, _encode_XtsmTemplate } from "../TSM/XtsmTemplate.ta.mjs";

import { SignedData, _decode_SignedData, _encode_SignedData } from "../X9-84-CMS/SignedData.ta.mjs";

import { ACBioContentInformation, _decode_ACBioContentInformation, _encode_ACBioContentInformation } from "../AuthenticationContextForBiometrics/ACBioContentInformation.ta.mjs";



/**
 * @summary BiometricTTPProcess
 * @description
 *
 * TTP → client download of a reference template plus TTP integrity
 * evidence (signature and optional ACBio). Used in reference-on-TTP
 * for local model. ITU-T Rec. X.1084 (05/2008) §11.5 Table 7, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricTTPProcess ::= SEQUENCE {
 * templateData    XtsmTemplate,
 * digitalSignature    SignedData,
 * aCforBioOnClient    ACBioContentInformation OPTIONAL
 *             -- see ISO/IEC 24761
 * }
 * ```
 * 
 * @class
 */
export
class BiometricTTPProcess {
    constructor (
        /**
         * @summary `templateData`.
         * @description
         *
         * Reference template as `XtsmTemplate` (X.1089 biometric
         * certificate). X.1084 §11.3, §11.5.
         *
         * @public
         * @readonly
         */
        readonly templateData: XtsmTemplate,
        /**
         * @summary `digitalSignature`.
         * @description
         *
         * CMS `SignedData` (X9.84) over the biometric process or payload.
         * Assures integrity of that party's processing. X.1084 §11.1 item 4.
         *
         * @public
         * @readonly
         */
        readonly digitalSignature: SignedData,
        /**
         * @summary `aCforBioOnClient`.
         * @description
         *
         * Optional ISO/IEC 24761 ACBio for the client process. X.1084 §11.1.
         *
         * @public
         * @readonly
         */
        readonly aCforBioOnClient: OPTIONAL<ACBioContentInformation>
    ) {}

    /**
     * @summary Restructures an object into a BiometricTTPProcess
     * @description
     * 
     * This takes an `object` and converts it to a `BiometricTTPProcess`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BiometricTTPProcess`.
     * @returns {BiometricTTPProcess}
     */
    public static _from_object (_o: { [_K in keyof (BiometricTTPProcess)]: (BiometricTTPProcess)[_K] }): BiometricTTPProcess {
        return new BiometricTTPProcess(_o.templateData, _o.digitalSignature, _o.aCforBioOnClient);
    }


}

/**
 * @summary The Leading Root Component Types of BiometricTTPProcess
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BiometricTTPProcess: $.ComponentSpec[] = [
    new $.ComponentSpec("templateData", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("digitalSignature", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aCforBioOnClient", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of BiometricTTPProcess
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BiometricTTPProcess: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BiometricTTPProcess
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BiometricTTPProcess: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BiometricTTPProcess: $.ASN1Decoder<BiometricTTPProcess> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricTTPProcess
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BiometricTTPProcess (el: _Element): BiometricTTPProcess {
    if (!_cached_decoder_for_BiometricTTPProcess) { _cached_decoder_for_BiometricTTPProcess = function (el: _Element): BiometricTTPProcess {
    let templateData!: XtsmTemplate;
    let digitalSignature!: SignedData;
    let aCforBioOnClient: OPTIONAL<ACBioContentInformation>;
    const callbacks: $.DecodingMap = {
        "templateData": (_el: _Element): void => { templateData = _decode_XtsmTemplate(_el); },
        "digitalSignature": (_el: _Element): void => { digitalSignature = _decode_SignedData(_el); },
        "aCforBioOnClient": (_el: _Element): void => { aCforBioOnClient = _decode_ACBioContentInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BiometricTTPProcess,
        _extension_additions_list_spec_for_BiometricTTPProcess,
        _root_component_type_list_2_spec_for_BiometricTTPProcess,
        undefined,
    );
    return new BiometricTTPProcess(
        templateData,
        digitalSignature,
        aCforBioOnClient
    );
}; }
    return _cached_decoder_for_BiometricTTPProcess(el);
}

let _cached_encoder_for_BiometricTTPProcess: $.ASN1Encoder<BiometricTTPProcess> | null = null;

/**
 * @summary Encodes a(n) BiometricTTPProcess into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricTTPProcess, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricTTPProcess (value: BiometricTTPProcess, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BiometricTTPProcess) { _cached_encoder_for_BiometricTTPProcess = function (value: BiometricTTPProcess): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_XtsmTemplate(value.templateData, $.BER),
            /* REQUIRED   */ _encode_SignedData(value.digitalSignature, $.BER),
            /* IF_ABSENT  */ ((value.aCforBioOnClient === undefined) ? undefined : _encode_ACBioContentInformation(value.aCforBioOnClient, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BiometricTTPProcess(value, elGetter);
}


/* eslint-enable */
