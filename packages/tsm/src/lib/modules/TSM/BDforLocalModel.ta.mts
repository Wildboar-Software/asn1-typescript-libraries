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
import { BiometricClientProcess, _decode_BiometricClientProcess, _encode_BiometricClientProcess } from "../TSM/BiometricClientProcess.ta.mjs";

import { SignedData, _decode_SignedData, _encode_SignedData } from "../X9-84-CMS/SignedData.ta.mjs";

import { ACBioContentInformation, _decode_ACBioContentInformation, _encode_ACBioContentInformation } from "../AuthenticationContextForBiometrics/ACBioContentInformation.ta.mjs";



/**
 * @summary BDforLocalModel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BDforLocalModel ::= SEQUENCE {
 * biometricClientProcess    BiometricClientProcess,
 * digitalSignature    SignedData,
 * aCforBioOnClient    ACBioContentInformation OPTIONAL
 *             -- see ISO/IEC 24761
 * }
 * ```
 * 
 * @class
 */
export
class BDforLocalModel {
    constructor (
        /**
         * @summary `biometricClientProcess`.
         * @public
         * @readonly
         */
        readonly biometricClientProcess: BiometricClientProcess,
        /**
         * @summary `digitalSignature`.
         * @public
         * @readonly
         */
        readonly digitalSignature: SignedData,
        /**
         * @summary `aCforBioOnClient`.
         * @public
         * @readonly
         */
        readonly aCforBioOnClient: OPTIONAL<ACBioContentInformation>
    ) {}

    /**
     * @summary Restructures an object into a BDforLocalModel
     * @description
     * 
     * This takes an `object` and converts it to a `BDforLocalModel`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BDforLocalModel`.
     * @returns {BDforLocalModel}
     */
    public static _from_object (_o: { [_K in keyof (BDforLocalModel)]: (BDforLocalModel)[_K] }): BDforLocalModel {
        return new BDforLocalModel(_o.biometricClientProcess, _o.digitalSignature, _o.aCforBioOnClient);
    }


}

/**
 * @summary The Leading Root Component Types of BDforLocalModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BDforLocalModel: $.ComponentSpec[] = [
    new $.ComponentSpec("biometricClientProcess", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("digitalSignature", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aCforBioOnClient", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of BDforLocalModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BDforLocalModel: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BDforLocalModel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BDforLocalModel: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BDforLocalModel: $.ASN1Decoder<BDforLocalModel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BDforLocalModel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BDforLocalModel (el: _Element): BDforLocalModel {
    if (!_cached_decoder_for_BDforLocalModel) { _cached_decoder_for_BDforLocalModel = function (el: _Element): BDforLocalModel {
    let biometricClientProcess!: BiometricClientProcess;
    let digitalSignature!: SignedData;
    let aCforBioOnClient: OPTIONAL<ACBioContentInformation>;
    const callbacks: $.DecodingMap = {
        "biometricClientProcess": (_el: _Element): void => { biometricClientProcess = _decode_BiometricClientProcess(_el); },
        "digitalSignature": (_el: _Element): void => { digitalSignature = _decode_SignedData(_el); },
        "aCforBioOnClient": (_el: _Element): void => { aCforBioOnClient = _decode_ACBioContentInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BDforLocalModel,
        _extension_additions_list_spec_for_BDforLocalModel,
        _root_component_type_list_2_spec_for_BDforLocalModel,
        undefined,
    );
    return new BDforLocalModel(
        biometricClientProcess,
        digitalSignature,
        aCforBioOnClient
    );
}; }
    return _cached_decoder_for_BDforLocalModel(el);
}

let _cached_encoder_for_BDforLocalModel: $.ASN1Encoder<BDforLocalModel> | null = null;

/**
 * @summary Encodes a(n) BDforLocalModel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BDforLocalModel, encoded as an ASN.1 Element.
 */
export
function _encode_BDforLocalModel (value: BDforLocalModel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BDforLocalModel) { _cached_encoder_for_BDforLocalModel = function (value: BDforLocalModel): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_BiometricClientProcess(value.biometricClientProcess, $.BER),
            /* REQUIRED   */ _encode_SignedData(value.digitalSignature, $.BER),
            /* IF_ABSENT  */ ((value.aCforBioOnClient === undefined) ? undefined : _encode_ACBioContentInformation(value.aCforBioOnClient, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BDforLocalModel(value, elGetter);
}


/* eslint-enable */
