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
import { AdministrableObject, _decode_AdministrableObject, _encode_AdministrableObject } from "../AIN-Parameters/AdministrableObject.ta.mjs";
// export { AdministrableObject, _decode_AdministrableObject, _encode_AdministrableObject } from "../AIN-Parameters/AdministrableObject.ta.mjs";
import { EditListType, _enum_for_EditListType, EditListType_addListElement /* IMPORTED_LONG_ENUMERATION_ITEM */, addListElement /* IMPORTED_SHORT_ENUMERATION_ITEM */, EditListType_deleteListElement /* IMPORTED_LONG_ENUMERATION_ITEM */, deleteListElement /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EditListType, _encode_EditListType } from "../AIN-Parameters/EditListType.ta.mjs";
// export { EditListType, _enum_for_EditListType, EditListType_addListElement /* IMPORTED_LONG_ENUMERATION_ITEM */, addListElement /* IMPORTED_SHORT_ENUMERATION_ITEM */, EditListType_deleteListElement /* IMPORTED_LONG_ENUMERATION_ITEM */, deleteListElement /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EditListType, _encode_EditListType } from "../AIN-Parameters/EditListType.ta.mjs";
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
import { ControlEncountered, _decode_ControlEncountered, _encode_ControlEncountered } from "../AIN-Parameters/ControlEncountered.ta.mjs";
// export { ControlEncountered, _decode_ControlEncountered, _encode_ControlEncountered } from "../AIN-Parameters/ControlEncountered.ta.mjs";
import { AMAslpID, _decode_AMAslpID, _encode_AMAslpID } from "../AIN-Parameters/AMAslpID.ta.mjs";
// export { AMAslpID, _decode_AMAslpID, _encode_AMAslpID } from "../AIN-Parameters/AMAslpID.ta.mjs";


/**
 * @summary UpdateArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateArg ::= SEQUENCE{
 *             administrableObject            AdministrableObject,
 *             editListType                   EditListType OPTIONAL,
 *             amp1                           Amp1 OPTIONAL,
 *             amp2                           Amp2 OPTIONAL,
 *             extensionParameter             [84] IMPLICIT ExtensionParameter OPTIONAL,
 *             controlEncountered             ControlEncountered OPTIONAL,
 *             aMAslpID                       [10] IMPLICIT AMAslpID OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class UpdateArg {
    constructor (
        /**
         * @summary `administrableObject`.
         * @public
         * @readonly
         */
        readonly administrableObject: AdministrableObject,
        /**
         * @summary `editListType`.
         * @public
         * @readonly
         */
        readonly editListType: OPTIONAL<EditListType>,
        /**
         * @summary `amp1`.
         * @public
         * @readonly
         */
        readonly amp1: OPTIONAL<Amp1>,
        /**
         * @summary `amp2`.
         * @public
         * @readonly
         */
        readonly amp2: OPTIONAL<Amp2>,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>,
        /**
         * @summary `controlEncountered`.
         * @public
         * @readonly
         */
        readonly controlEncountered: OPTIONAL<ControlEncountered>,
        /**
         * @summary `aMAslpID`.
         * @public
         * @readonly
         */
        readonly aMAslpID: OPTIONAL<AMAslpID>
    ) {}

    /**
     * @summary Restructures an object into a UpdateArg
     * @description
     * 
     * This takes an `object` and converts it to a `UpdateArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateArg`.
     * @returns {UpdateArg}
     */
    public static _from_object (_o: { [_K in keyof (UpdateArg)]: (UpdateArg)[_K] }): UpdateArg {
        return new UpdateArg(_o.administrableObject, _o.editListType, _o.amp1, _o.amp2, _o.extensionParameter, _o.controlEncountered, _o.aMAslpID);
    }

        /**
         * @summary The enum used as the type of the component `editListType`
         * @public
         * @static
         */

    public static _enum_for_editListType = _enum_for_EditListType;
}

/**
 * @summary The Leading Root Component Types of UpdateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UpdateArg: $.ComponentSpec[] = [
    new $.ComponentSpec("administrableObject", false, $.hasAnyTag),
    new $.ComponentSpec("editListType", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84)),
    new $.ComponentSpec("controlEncountered", true, $.hasTag(_TagClass.context, 127)),
    new $.ComponentSpec("aMAslpID", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of UpdateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UpdateArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UpdateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UpdateArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UpdateArg: $.ASN1Decoder<UpdateArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UpdateArg (el: _Element): UpdateArg {
    if (!_cached_decoder_for_UpdateArg) { _cached_decoder_for_UpdateArg = function (el: _Element): UpdateArg {
    let administrableObject!: AdministrableObject;
    let editListType: OPTIONAL<EditListType>;
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    let controlEncountered: OPTIONAL<ControlEncountered>;
    let aMAslpID: OPTIONAL<AMAslpID>;
    const callbacks: $.DecodingMap = {
        "administrableObject": (_el: _Element): void => { administrableObject = _decode_AdministrableObject(_el); },
        "editListType": (_el: _Element): void => { editListType = _decode_EditListType(_el); },
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); },
        "controlEncountered": (_el: _Element): void => { controlEncountered = _decode_ControlEncountered(_el); },
        "aMAslpID": (_el: _Element): void => { aMAslpID = $._decode_implicit<AMAslpID>(() => _decode_AMAslpID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UpdateArg,
        _extension_additions_list_spec_for_UpdateArg,
        _root_component_type_list_2_spec_for_UpdateArg,
        undefined,
    );
    return new UpdateArg(
        administrableObject,
        editListType,
        amp1,
        amp2,
        extensionParameter,
        controlEncountered,
        aMAslpID
    );
}; }
    return _cached_decoder_for_UpdateArg(el);
}

let _cached_encoder_for_UpdateArg: $.ASN1Encoder<UpdateArg> | null = null;

/**
 * @summary Encodes a(n) UpdateArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateArg, encoded as an ASN.1 Element.
 */
export
function _encode_UpdateArg (value: UpdateArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UpdateArg) { _cached_encoder_for_UpdateArg = function (value: UpdateArg, elGetter: $.ASN1Encoder<UpdateArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AdministrableObject(value.administrableObject, $.BER),
            /* IF_ABSENT  */ ((value.editListType === undefined) ? undefined : _encode_EditListType(value.editListType, $.BER)),
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER)),
            /* IF_ABSENT  */ ((value.controlEncountered === undefined) ? undefined : _encode_ControlEncountered(value.controlEncountered, $.BER)),
            /* IF_ABSENT  */ ((value.aMAslpID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_AMAslpID, $.BER)(value.aMAslpID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UpdateArg(value, elGetter);
}


/* eslint-enable */
