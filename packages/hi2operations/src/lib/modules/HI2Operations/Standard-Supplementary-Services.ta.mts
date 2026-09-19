/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { ISUP_SS_parameters, _decode_ISUP_SS_parameters, _encode_ISUP_SS_parameters } from "../HI2Operations/ISUP-SS-parameters.ta.mjs";
// export { ISUP_SS_parameters, _decode_ISUP_SS_parameters, _encode_ISUP_SS_parameters } from "../HI2Operations/ISUP-SS-parameters.ta.mjs";
import { DSS1_SS_parameters_codeset_0, _decode_DSS1_SS_parameters_codeset_0, _encode_DSS1_SS_parameters_codeset_0 } from "../HI2Operations/DSS1-SS-parameters-codeset-0.ta.mjs";
// export { DSS1_SS_parameters_codeset_0, _decode_DSS1_SS_parameters_codeset_0, _encode_DSS1_SS_parameters_codeset_0 } from "../HI2Operations/DSS1-SS-parameters-codeset-0.ta.mjs";
import { DSS1_SS_parameters_codeset_4, _decode_DSS1_SS_parameters_codeset_4, _encode_DSS1_SS_parameters_codeset_4 } from "../HI2Operations/DSS1-SS-parameters-codeset-4.ta.mjs";
// export { DSS1_SS_parameters_codeset_4, _decode_DSS1_SS_parameters_codeset_4, _encode_DSS1_SS_parameters_codeset_4 } from "../HI2Operations/DSS1-SS-parameters-codeset-4.ta.mjs";
import { DSS1_SS_parameters_codeset_5, _decode_DSS1_SS_parameters_codeset_5, _encode_DSS1_SS_parameters_codeset_5 } from "../HI2Operations/DSS1-SS-parameters-codeset-5.ta.mjs";
// export { DSS1_SS_parameters_codeset_5, _decode_DSS1_SS_parameters_codeset_5, _encode_DSS1_SS_parameters_codeset_5 } from "../HI2Operations/DSS1-SS-parameters-codeset-5.ta.mjs";
import { DSS1_SS_parameters_codeset_6, _decode_DSS1_SS_parameters_codeset_6, _encode_DSS1_SS_parameters_codeset_6 } from "../HI2Operations/DSS1-SS-parameters-codeset-6.ta.mjs";
// export { DSS1_SS_parameters_codeset_6, _decode_DSS1_SS_parameters_codeset_6, _encode_DSS1_SS_parameters_codeset_6 } from "../HI2Operations/DSS1-SS-parameters-codeset-6.ta.mjs";
import { DSS1_SS_parameters_codeset_7, _decode_DSS1_SS_parameters_codeset_7, _encode_DSS1_SS_parameters_codeset_7 } from "../HI2Operations/DSS1-SS-parameters-codeset-7.ta.mjs";
// export { DSS1_SS_parameters_codeset_7, _decode_DSS1_SS_parameters_codeset_7, _encode_DSS1_SS_parameters_codeset_7 } from "../HI2Operations/DSS1-SS-parameters-codeset-7.ta.mjs";
import { DSS1_SS_Invoke_Components, _decode_DSS1_SS_Invoke_Components, _encode_DSS1_SS_Invoke_Components } from "../HI2Operations/DSS1-SS-Invoke-Components.ta.mjs";
// export { DSS1_SS_Invoke_Components, _decode_DSS1_SS_Invoke_Components, _encode_DSS1_SS_Invoke_Components } from "../HI2Operations/DSS1-SS-Invoke-Components.ta.mjs";
import { MAP_SS_Parameters, _decode_MAP_SS_Parameters, _encode_MAP_SS_Parameters } from "../HI2Operations/MAP-SS-Parameters.ta.mjs";
// export { MAP_SS_Parameters, _decode_MAP_SS_Parameters, _encode_MAP_SS_Parameters } from "../HI2Operations/MAP-SS-Parameters.ta.mjs";
import { MAP_SS_Invoke_Components, _decode_MAP_SS_Invoke_Components, _encode_MAP_SS_Invoke_Components } from "../HI2Operations/MAP-SS-Invoke-Components.ta.mjs";
// export { MAP_SS_Invoke_Components, _decode_MAP_SS_Invoke_Components, _encode_MAP_SS_Invoke_Components } from "../HI2Operations/MAP-SS-Invoke-Components.ta.mjs";


/**
 * @summary Standard_Supplementary_Services
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Standard-Supplementary-Services ::= SEQUENCE
 * {
 *     iSUP-SS-parameters                [1] ISUP-SS-parameters OPTIONAL,
 *     dSS1-SS-parameters-codeset-0    [2] DSS1-SS-parameters-codeset-0 OPTIONAL,
 *     dSS1-SS-parameters-codeset-4    [3] DSS1-SS-parameters-codeset-4 OPTIONAL,
 *     dSS1-SS-parameters-codeset-5    [4] DSS1-SS-parameters-codeset-5 OPTIONAL,
 *     dSS1-SS-parameters-codeset-6    [5] DSS1-SS-parameters-codeset-6 OPTIONAL,
 *     dSS1-SS-parameters-codeset-7    [6] DSS1-SS-parameters-codeset-7 OPTIONAL,
 *     dSS1-SS-Invoke-components        [7] DSS1-SS-Invoke-Components OPTIONAL,
 *     mAP-SS-Parameters                [8] MAP-SS-Parameters OPTIONAL,
 *     mAP-SS-Invoke-Components        [9] MAP-SS-Invoke-Components OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class Standard_Supplementary_Services {
    constructor (
        /**
         * @summary `iSUP_SS_parameters`.
         * @public
         * @readonly
         */
        readonly iSUP_SS_parameters: OPTIONAL<ISUP_SS_parameters>,
        /**
         * @summary `dSS1_SS_parameters_codeset_0`.
         * @public
         * @readonly
         */
        readonly dSS1_SS_parameters_codeset_0: OPTIONAL<DSS1_SS_parameters_codeset_0>,
        /**
         * @summary `dSS1_SS_parameters_codeset_4`.
         * @public
         * @readonly
         */
        readonly dSS1_SS_parameters_codeset_4: OPTIONAL<DSS1_SS_parameters_codeset_4>,
        /**
         * @summary `dSS1_SS_parameters_codeset_5`.
         * @public
         * @readonly
         */
        readonly dSS1_SS_parameters_codeset_5: OPTIONAL<DSS1_SS_parameters_codeset_5>,
        /**
         * @summary `dSS1_SS_parameters_codeset_6`.
         * @public
         * @readonly
         */
        readonly dSS1_SS_parameters_codeset_6: OPTIONAL<DSS1_SS_parameters_codeset_6>,
        /**
         * @summary `dSS1_SS_parameters_codeset_7`.
         * @public
         * @readonly
         */
        readonly dSS1_SS_parameters_codeset_7: OPTIONAL<DSS1_SS_parameters_codeset_7>,
        /**
         * @summary `dSS1_SS_Invoke_components`.
         * @public
         * @readonly
         */
        readonly dSS1_SS_Invoke_components: OPTIONAL<DSS1_SS_Invoke_Components>,
        /**
         * @summary `mAP_SS_Parameters`.
         * @public
         * @readonly
         */
        readonly mAP_SS_Parameters: OPTIONAL<MAP_SS_Parameters>,
        /**
         * @summary `mAP_SS_Invoke_Components`.
         * @public
         * @readonly
         */
        readonly mAP_SS_Invoke_Components: OPTIONAL<MAP_SS_Invoke_Components>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Standard_Supplementary_Services
     * @description
     * 
     * This takes an `object` and converts it to a `Standard_Supplementary_Services`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Standard_Supplementary_Services`.
     * @returns {Standard_Supplementary_Services}
     */
    public static _from_object (_o: { [_K in keyof (Standard_Supplementary_Services)]: (Standard_Supplementary_Services)[_K] }): Standard_Supplementary_Services {
        return new Standard_Supplementary_Services(_o.iSUP_SS_parameters, _o.dSS1_SS_parameters_codeset_0, _o.dSS1_SS_parameters_codeset_4, _o.dSS1_SS_parameters_codeset_5, _o.dSS1_SS_parameters_codeset_6, _o.dSS1_SS_parameters_codeset_7, _o.dSS1_SS_Invoke_components, _o.mAP_SS_Parameters, _o.mAP_SS_Invoke_Components, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Standard_Supplementary_Services
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Standard_Supplementary_Services: $.ComponentSpec[] = [
    new $.ComponentSpec("iSUP-SS-parameters", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("dSS1-SS-parameters-codeset-0", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dSS1-SS-parameters-codeset-4", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("dSS1-SS-parameters-codeset-5", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("dSS1-SS-parameters-codeset-6", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("dSS1-SS-parameters-codeset-7", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("dSS1-SS-Invoke-components", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("mAP-SS-Parameters", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("mAP-SS-Invoke-Components", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of Standard_Supplementary_Services
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Standard_Supplementary_Services: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Standard_Supplementary_Services
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Standard_Supplementary_Services: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Standard_Supplementary_Services: $.ASN1Decoder<Standard_Supplementary_Services> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Standard_Supplementary_Services
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Standard_Supplementary_Services (el: _Element): Standard_Supplementary_Services {
    if (!_cached_decoder_for_Standard_Supplementary_Services) { _cached_decoder_for_Standard_Supplementary_Services = function (el: _Element): Standard_Supplementary_Services {
    let iSUP_SS_parameters: OPTIONAL<ISUP_SS_parameters>;
    let dSS1_SS_parameters_codeset_0: OPTIONAL<DSS1_SS_parameters_codeset_0>;
    let dSS1_SS_parameters_codeset_4: OPTIONAL<DSS1_SS_parameters_codeset_4>;
    let dSS1_SS_parameters_codeset_5: OPTIONAL<DSS1_SS_parameters_codeset_5>;
    let dSS1_SS_parameters_codeset_6: OPTIONAL<DSS1_SS_parameters_codeset_6>;
    let dSS1_SS_parameters_codeset_7: OPTIONAL<DSS1_SS_parameters_codeset_7>;
    let dSS1_SS_Invoke_components: OPTIONAL<DSS1_SS_Invoke_Components>;
    let mAP_SS_Parameters: OPTIONAL<MAP_SS_Parameters>;
    let mAP_SS_Invoke_Components: OPTIONAL<MAP_SS_Invoke_Components>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iSUP-SS-parameters": (_el: _Element): void => { iSUP_SS_parameters = $._decode_implicit<ISUP_SS_parameters>(() => _decode_ISUP_SS_parameters)(_el); },
        "dSS1-SS-parameters-codeset-0": (_el: _Element): void => { dSS1_SS_parameters_codeset_0 = $._decode_implicit<DSS1_SS_parameters_codeset_0>(() => _decode_DSS1_SS_parameters_codeset_0)(_el); },
        "dSS1-SS-parameters-codeset-4": (_el: _Element): void => { dSS1_SS_parameters_codeset_4 = $._decode_implicit<DSS1_SS_parameters_codeset_4>(() => _decode_DSS1_SS_parameters_codeset_4)(_el); },
        "dSS1-SS-parameters-codeset-5": (_el: _Element): void => { dSS1_SS_parameters_codeset_5 = $._decode_implicit<DSS1_SS_parameters_codeset_5>(() => _decode_DSS1_SS_parameters_codeset_5)(_el); },
        "dSS1-SS-parameters-codeset-6": (_el: _Element): void => { dSS1_SS_parameters_codeset_6 = $._decode_implicit<DSS1_SS_parameters_codeset_6>(() => _decode_DSS1_SS_parameters_codeset_6)(_el); },
        "dSS1-SS-parameters-codeset-7": (_el: _Element): void => { dSS1_SS_parameters_codeset_7 = $._decode_implicit<DSS1_SS_parameters_codeset_7>(() => _decode_DSS1_SS_parameters_codeset_7)(_el); },
        "dSS1-SS-Invoke-components": (_el: _Element): void => { dSS1_SS_Invoke_components = $._decode_implicit<DSS1_SS_Invoke_Components>(() => _decode_DSS1_SS_Invoke_Components)(_el); },
        "mAP-SS-Parameters": (_el: _Element): void => { mAP_SS_Parameters = $._decode_implicit<MAP_SS_Parameters>(() => _decode_MAP_SS_Parameters)(_el); },
        "mAP-SS-Invoke-Components": (_el: _Element): void => { mAP_SS_Invoke_Components = $._decode_implicit<MAP_SS_Invoke_Components>(() => _decode_MAP_SS_Invoke_Components)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Standard_Supplementary_Services,
        _extension_additions_list_spec_for_Standard_Supplementary_Services,
        _root_component_type_list_2_spec_for_Standard_Supplementary_Services,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Standard_Supplementary_Services(
        iSUP_SS_parameters,
        dSS1_SS_parameters_codeset_0,
        dSS1_SS_parameters_codeset_4,
        dSS1_SS_parameters_codeset_5,
        dSS1_SS_parameters_codeset_6,
        dSS1_SS_parameters_codeset_7,
        dSS1_SS_Invoke_components,
        mAP_SS_Parameters,
        mAP_SS_Invoke_Components,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Standard_Supplementary_Services(el);
}

let _cached_encoder_for_Standard_Supplementary_Services: $.ASN1Encoder<Standard_Supplementary_Services> | null = null;

/**
 * @summary Encodes a(n) Standard_Supplementary_Services into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Standard_Supplementary_Services, encoded as an ASN.1 Element.
 */
export
function _encode_Standard_Supplementary_Services (value: Standard_Supplementary_Services, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Standard_Supplementary_Services) { _cached_encoder_for_Standard_Supplementary_Services = function (value: Standard_Supplementary_Services, elGetter: $.ASN1Encoder<Standard_Supplementary_Services>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.iSUP_SS_parameters === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ISUP_SS_parameters, $.BER)(value.iSUP_SS_parameters, $.BER)),
            /* IF_ABSENT  */ ((value.dSS1_SS_parameters_codeset_0 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_DSS1_SS_parameters_codeset_0, $.BER)(value.dSS1_SS_parameters_codeset_0, $.BER)),
            /* IF_ABSENT  */ ((value.dSS1_SS_parameters_codeset_4 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_DSS1_SS_parameters_codeset_4, $.BER)(value.dSS1_SS_parameters_codeset_4, $.BER)),
            /* IF_ABSENT  */ ((value.dSS1_SS_parameters_codeset_5 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_DSS1_SS_parameters_codeset_5, $.BER)(value.dSS1_SS_parameters_codeset_5, $.BER)),
            /* IF_ABSENT  */ ((value.dSS1_SS_parameters_codeset_6 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_DSS1_SS_parameters_codeset_6, $.BER)(value.dSS1_SS_parameters_codeset_6, $.BER)),
            /* IF_ABSENT  */ ((value.dSS1_SS_parameters_codeset_7 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_DSS1_SS_parameters_codeset_7, $.BER)(value.dSS1_SS_parameters_codeset_7, $.BER)),
            /* IF_ABSENT  */ ((value.dSS1_SS_Invoke_components === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_DSS1_SS_Invoke_Components, $.BER)(value.dSS1_SS_Invoke_components, $.BER)),
            /* IF_ABSENT  */ ((value.mAP_SS_Parameters === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_MAP_SS_Parameters, $.BER)(value.mAP_SS_Parameters, $.BER)),
            /* IF_ABSENT  */ ((value.mAP_SS_Invoke_Components === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_MAP_SS_Invoke_Components, $.BER)(value.mAP_SS_Invoke_Components, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Standard_Supplementary_Services(value, elGetter);
}


/* eslint-enable */
