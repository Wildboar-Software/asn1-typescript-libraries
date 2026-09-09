/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { CSTAVersion, _decode_CSTAVersion, _encode_CSTAVersion } from "../CSTA-application-context-information-csta3/CSTAVersion.ta.mjs";

import { CSTAFunctionality, _decode_CSTAFunctionality, _encode_CSTAFunctionality } from "../CSTA-application-context-information-csta3/CSTAFunctionality.ta.mjs";

import { CSTAPrivateDataVersionList, _decode_CSTAPrivateDataVersionList, _encode_CSTAPrivateDataVersionList } from "../CSTA-application-context-information-csta3/CSTAPrivateDataVersionList.ta.mjs";



/**
 * @summary NewACSEUserInformationForCSTA
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NewACSEUserInformationForCSTA ::= SEQUENCE
 * {     cSTAVersion                 CSTAVersion,
 * --
 * --    Note that the following two parameters are defined in ECMA-218 (CSTA Phase II).
 * --    They are defined in the context of CSTA Phase II Services and Events for
 * --    backward compatibility considerations.
 * --    For CSTA Phase III (and later), implementations should use CSTA Capability Exchange Services
 * --    to determine the Services and Events supported by a switching function.
 * --
 *     cSTAFunctionsRequiredByApplication    [0] IMPLICIT CSTAFunctionality            OPTIONAL,
 *     cSTAFunctionsThatCanBeSupplied            [1] IMPLICIT CSTAFunctionality            OPTIONAL,
 *     cSTAPrivateDataVersionList            [2] IMPLICIT CSTAPrivateDataVersionList            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class NewACSEUserInformationForCSTA {
    constructor (
        /**
         * @summary `cSTAVersion`.
         * @public
         * @readonly
         */
        readonly cSTAVersion: CSTAVersion,
        /**
         * @summary `cSTAFunctionsRequiredByApplication`.
         * @public
         * @readonly
         */
        readonly cSTAFunctionsRequiredByApplication: OPTIONAL<CSTAFunctionality>,
        /**
         * @summary `cSTAFunctionsThatCanBeSupplied`.
         * @public
         * @readonly
         */
        readonly cSTAFunctionsThatCanBeSupplied: OPTIONAL<CSTAFunctionality>,
        /**
         * @summary `cSTAPrivateDataVersionList`.
         * @public
         * @readonly
         */
        readonly cSTAPrivateDataVersionList: OPTIONAL<CSTAPrivateDataVersionList>
    ) {}

    /**
     * @summary Restructures an object into a NewACSEUserInformationForCSTA
     * @description
     * 
     * This takes an `object` and converts it to a `NewACSEUserInformationForCSTA`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NewACSEUserInformationForCSTA`.
     * @returns {NewACSEUserInformationForCSTA}
     */
    public static _from_object (_o: { [_K in keyof (NewACSEUserInformationForCSTA)]: (NewACSEUserInformationForCSTA)[_K] }): NewACSEUserInformationForCSTA {
        return new NewACSEUserInformationForCSTA(_o.cSTAVersion, _o.cSTAFunctionsRequiredByApplication, _o.cSTAFunctionsThatCanBeSupplied, _o.cSTAPrivateDataVersionList);
    }


}

/**
 * @summary The Leading Root Component Types of NewACSEUserInformationForCSTA
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NewACSEUserInformationForCSTA: $.ComponentSpec[] = [
    new $.ComponentSpec("cSTAVersion", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("cSTAFunctionsRequiredByApplication", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("cSTAFunctionsThatCanBeSupplied", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cSTAPrivateDataVersionList", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of NewACSEUserInformationForCSTA
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NewACSEUserInformationForCSTA: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NewACSEUserInformationForCSTA
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NewACSEUserInformationForCSTA: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NewACSEUserInformationForCSTA: $.ASN1Decoder<NewACSEUserInformationForCSTA> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NewACSEUserInformationForCSTA
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NewACSEUserInformationForCSTA (el: _Element): NewACSEUserInformationForCSTA {
    if (!_cached_decoder_for_NewACSEUserInformationForCSTA) { _cached_decoder_for_NewACSEUserInformationForCSTA = function (el: _Element): NewACSEUserInformationForCSTA {
    let cSTAVersion!: CSTAVersion;
    let cSTAFunctionsRequiredByApplication: OPTIONAL<CSTAFunctionality>;
    let cSTAFunctionsThatCanBeSupplied: OPTIONAL<CSTAFunctionality>;
    let cSTAPrivateDataVersionList: OPTIONAL<CSTAPrivateDataVersionList>;
    const callbacks: $.DecodingMap = {
        "cSTAVersion": (_el: _Element): void => { cSTAVersion = _decode_CSTAVersion(_el); },
        "cSTAFunctionsRequiredByApplication": (_el: _Element): void => { cSTAFunctionsRequiredByApplication = $._decode_implicit<CSTAFunctionality>(() => _decode_CSTAFunctionality)(_el); },
        "cSTAFunctionsThatCanBeSupplied": (_el: _Element): void => { cSTAFunctionsThatCanBeSupplied = $._decode_implicit<CSTAFunctionality>(() => _decode_CSTAFunctionality)(_el); },
        "cSTAPrivateDataVersionList": (_el: _Element): void => { cSTAPrivateDataVersionList = $._decode_implicit<CSTAPrivateDataVersionList>(() => _decode_CSTAPrivateDataVersionList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NewACSEUserInformationForCSTA,
        _extension_additions_list_spec_for_NewACSEUserInformationForCSTA,
        _root_component_type_list_2_spec_for_NewACSEUserInformationForCSTA,
        undefined,
    );
    return new NewACSEUserInformationForCSTA(
        cSTAVersion,
        cSTAFunctionsRequiredByApplication,
        cSTAFunctionsThatCanBeSupplied,
        cSTAPrivateDataVersionList
    );
}; }
    return _cached_decoder_for_NewACSEUserInformationForCSTA(el);
}

let _cached_encoder_for_NewACSEUserInformationForCSTA: $.ASN1Encoder<NewACSEUserInformationForCSTA> | null = null;

/**
 * @summary Encodes a(n) NewACSEUserInformationForCSTA into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NewACSEUserInformationForCSTA, encoded as an ASN.1 Element.
 */
export
function _encode_NewACSEUserInformationForCSTA (value: NewACSEUserInformationForCSTA, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NewACSEUserInformationForCSTA) { _cached_encoder_for_NewACSEUserInformationForCSTA = function (value: NewACSEUserInformationForCSTA, elGetter: $.ASN1Encoder<NewACSEUserInformationForCSTA>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CSTAVersion(value.cSTAVersion, $.BER),
            /* IF_ABSENT  */ ((value.cSTAFunctionsRequiredByApplication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CSTAFunctionality, $.BER)(value.cSTAFunctionsRequiredByApplication, $.BER)),
            /* IF_ABSENT  */ ((value.cSTAFunctionsThatCanBeSupplied === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CSTAFunctionality, $.BER)(value.cSTAFunctionsThatCanBeSupplied, $.BER)),
            /* IF_ABSENT  */ ((value.cSTAPrivateDataVersionList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CSTAPrivateDataVersionList, $.BER)(value.cSTAPrivateDataVersionList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NewACSEUserInformationForCSTA(value, elGetter);
}


/* eslint-enable */
