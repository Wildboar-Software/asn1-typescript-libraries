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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";
// export { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";
import { Ext_SS_Status, _decode_Ext_SS_Status, _encode_Ext_SS_Status } from "../MAP-CommonDataTypes/Ext-SS-Status.ta.mjs";
// export { Ext_SS_Status, _decode_Ext_SS_Status, _encode_Ext_SS_Status } from "../MAP-CommonDataTypes/Ext-SS-Status.ta.mjs";
import { MaxMC_Bearers, _decode_MaxMC_Bearers, _encode_MaxMC_Bearers } from "../MAP-CommonDataTypes/MaxMC-Bearers.ta.mjs";
// export { MaxMC_Bearers, _decode_MaxMC_Bearers, _encode_MaxMC_Bearers } from "../MAP-CommonDataTypes/MaxMC-Bearers.ta.mjs";
import { MC_Bearers, _decode_MC_Bearers, _encode_MC_Bearers } from "../MAP-CommonDataTypes/MC-Bearers.ta.mjs";
// export { MC_Bearers, _decode_MC_Bearers, _encode_MC_Bearers } from "../MAP-CommonDataTypes/MC-Bearers.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary MC_SS_Info
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MC-SS-Info ::= SEQUENCE {
 *     ss-Code    [0] SS-Code,
 *     ss-Status    [1] Ext-SS-Status,
 *     nbrSB    [2] MaxMC-Bearers,
 *     nbrUser    [3] MC-Bearers,
 *     extensionContainer    [4] ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class MC_SS_Info {
    constructor (
        /**
         * @summary `ss_Code`.
         * @public
         * @readonly
         */
        readonly ss_Code: SS_Code,
        /**
         * @summary `ss_Status`.
         * @public
         * @readonly
         */
        readonly ss_Status: Ext_SS_Status,
        /**
         * @summary `nbrSB`.
         * @public
         * @readonly
         */
        readonly nbrSB: MaxMC_Bearers,
        /**
         * @summary `nbrUser`.
         * @public
         * @readonly
         */
        readonly nbrUser: MC_Bearers,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MC_SS_Info
     * @description
     * 
     * This takes an `object` and converts it to a `MC_SS_Info`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MC_SS_Info`.
     * @returns {MC_SS_Info}
     */
    public static _from_object (_o: { [_K in keyof (MC_SS_Info)]: (MC_SS_Info)[_K] }): MC_SS_Info {
        return new MC_SS_Info(_o.ss_Code, _o.ss_Status, _o.nbrSB, _o.nbrUser, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MC_SS_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MC_SS_Info: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-Code", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("ss-Status", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("nbrSB", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("nbrUser", false, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MC_SS_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MC_SS_Info: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MC_SS_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MC_SS_Info: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MC_SS_Info: $.ASN1Decoder<MC_SS_Info> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MC_SS_Info
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MC_SS_Info (el: _Element): MC_SS_Info {
    if (!_cached_decoder_for_MC_SS_Info) { _cached_decoder_for_MC_SS_Info = function (el: _Element): MC_SS_Info {
    let ss_Code!: SS_Code;
    let ss_Status!: Ext_SS_Status;
    let nbrSB!: MaxMC_Bearers;
    let nbrUser!: MC_Bearers;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-Code": (_el: _Element): void => { ss_Code = $._decode_implicit<SS_Code>(() => _decode_SS_Code)(_el); },
        "ss-Status": (_el: _Element): void => { ss_Status = $._decode_implicit<Ext_SS_Status>(() => _decode_Ext_SS_Status)(_el); },
        "nbrSB": (_el: _Element): void => { nbrSB = $._decode_implicit<MaxMC_Bearers>(() => _decode_MaxMC_Bearers)(_el); },
        "nbrUser": (_el: _Element): void => { nbrUser = $._decode_implicit<MC_Bearers>(() => _decode_MC_Bearers)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MC_SS_Info,
        _extension_additions_list_spec_for_MC_SS_Info,
        _root_component_type_list_2_spec_for_MC_SS_Info,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MC_SS_Info(
        ss_Code,
        ss_Status,
        nbrSB,
        nbrUser,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MC_SS_Info(el);
}

let _cached_encoder_for_MC_SS_Info: $.ASN1Encoder<MC_SS_Info> | null = null;

/**
 * @summary Encodes a(n) MC_SS_Info into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MC_SS_Info, encoded as an ASN.1 Element.
 */
export
function _encode_MC_SS_Info (value: MC_SS_Info, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MC_SS_Info) { _cached_encoder_for_MC_SS_Info = function (value: MC_SS_Info, elGetter: $.ASN1Encoder<MC_SS_Info>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SS_Code, $.BER)(value.ss_Code, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Ext_SS_Status, $.BER)(value.ss_Status, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MaxMC_Bearers, $.BER)(value.nbrSB, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_MC_Bearers, $.BER)(value.nbrUser, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MC_SS_Info(value, elGetter);
}


/* eslint-enable */
