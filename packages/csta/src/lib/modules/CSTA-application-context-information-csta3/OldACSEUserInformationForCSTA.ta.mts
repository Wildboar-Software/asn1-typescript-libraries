/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError
} from "@wildboar/asn1";
import { CSTAVersion, _decode_CSTAVersion, _encode_CSTAVersion } from "../CSTA-application-context-information-csta3/CSTAVersion.ta.mjs";

import { CSTAFunctionality, _decode_CSTAFunctionality, _encode_CSTAFunctionality } from "../CSTA-application-context-information-csta3/CSTAFunctionality.ta.mjs";



/**
 * @summary OldACSEUserInformationForCSTA
 * @description
 *
 * Phase II ACSE user-information: version plus required and supplied
 * `CSTAFunctionality`. All three components mandatory. ECMA-285 §8.2.2.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OldACSEUserInformationForCSTA ::= SEQUENCE
 * {    cSTAVersion                 CSTAVersion,
 *     cSTAFunctionsRequiredByApplication    CSTAFunctionality,
 *     cSTAFunctionsThatCanBeSupplied        CSTAFunctionality }
 * ```
 * 
 * @class
 */
export
class OldACSEUserInformationForCSTA {
    constructor (
        /**
         * @summary `cSTAVersion`.
         * @description Protocol versions offered or selected.
         * @public
         * @readonly
         */
        readonly cSTAVersion: CSTAVersion,
        /**
         * @summary `cSTAFunctionsRequiredByApplication`.
         * @description
         * CSTA services/events this application requires from the peer.
         * @public
         * @readonly
         */
        readonly cSTAFunctionsRequiredByApplication: CSTAFunctionality,
        /**
         * @summary `cSTAFunctionsThatCanBeSupplied`.
         * @description CSTA services/events this application can supply.
         * @public
         * @readonly
         */
        readonly cSTAFunctionsThatCanBeSupplied: CSTAFunctionality
    ) {}

    /**
     * @summary Restructures an object into a OldACSEUserInformationForCSTA
     * @description
     * 
     * This takes an `object` and converts it to a `OldACSEUserInformationForCSTA`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OldACSEUserInformationForCSTA`.
     * @returns {OldACSEUserInformationForCSTA}
     */
    public static _from_object (_o: { [_K in keyof (OldACSEUserInformationForCSTA)]: (OldACSEUserInformationForCSTA)[_K] }): OldACSEUserInformationForCSTA {
        return new OldACSEUserInformationForCSTA(_o.cSTAVersion, _o.cSTAFunctionsRequiredByApplication, _o.cSTAFunctionsThatCanBeSupplied);
    }


}

/**
 * @summary The Leading Root Component Types of OldACSEUserInformationForCSTA
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OldACSEUserInformationForCSTA: $.ComponentSpec[] = [
    new $.ComponentSpec("cSTAVersion", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("cSTAFunctionsRequiredByApplication", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("cSTAFunctionsThatCanBeSupplied", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of OldACSEUserInformationForCSTA
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OldACSEUserInformationForCSTA: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OldACSEUserInformationForCSTA
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OldACSEUserInformationForCSTA: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OldACSEUserInformationForCSTA: $.ASN1Decoder<OldACSEUserInformationForCSTA> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OldACSEUserInformationForCSTA
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OldACSEUserInformationForCSTA (el: _Element): OldACSEUserInformationForCSTA {
    if (!_cached_decoder_for_OldACSEUserInformationForCSTA) { _cached_decoder_for_OldACSEUserInformationForCSTA = function (el: _Element): OldACSEUserInformationForCSTA {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("OldACSEUserInformationForCSTA contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "cSTAVersion";
    sequence[1].name = "cSTAFunctionsRequiredByApplication";
    sequence[2].name = "cSTAFunctionsThatCanBeSupplied";
    let cSTAVersion!: CSTAVersion;
    let cSTAFunctionsRequiredByApplication!: CSTAFunctionality;
    let cSTAFunctionsThatCanBeSupplied!: CSTAFunctionality;
    cSTAVersion = _decode_CSTAVersion(sequence[0]);
    cSTAFunctionsRequiredByApplication = _decode_CSTAFunctionality(sequence[1]);
    cSTAFunctionsThatCanBeSupplied = _decode_CSTAFunctionality(sequence[2]);
    return new OldACSEUserInformationForCSTA(
        cSTAVersion,
        cSTAFunctionsRequiredByApplication,
        cSTAFunctionsThatCanBeSupplied,

    );
}; }
    return _cached_decoder_for_OldACSEUserInformationForCSTA(el);
}

let _cached_encoder_for_OldACSEUserInformationForCSTA: $.ASN1Encoder<OldACSEUserInformationForCSTA> | null = null;

/**
 * @summary Encodes a(n) OldACSEUserInformationForCSTA into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OldACSEUserInformationForCSTA, encoded as an ASN.1 Element.
 */
export
function _encode_OldACSEUserInformationForCSTA (value: OldACSEUserInformationForCSTA, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OldACSEUserInformationForCSTA) { _cached_encoder_for_OldACSEUserInformationForCSTA = function (value: OldACSEUserInformationForCSTA, elGetter: $.ASN1Encoder<OldACSEUserInformationForCSTA>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CSTAVersion(value.cSTAVersion, $.BER),
            /* REQUIRED   */ _encode_CSTAFunctionality(value.cSTAFunctionsRequiredByApplication, $.BER),
            /* REQUIRED   */ _encode_CSTAFunctionality(value.cSTAFunctionsThatCanBeSupplied, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OldACSEUserInformationForCSTA(value, elGetter);
}


/* eslint-enable */
