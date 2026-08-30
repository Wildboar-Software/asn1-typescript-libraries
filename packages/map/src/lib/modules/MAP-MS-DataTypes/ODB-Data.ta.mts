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
import { ODB_GeneralData, ODB_GeneralData_allOG_CallsBarred /* IMPORTED_LONG_NAMED_BIT */, allOG_CallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_internationalOGCallsBarred /* IMPORTED_LONG_NAMED_BIT */, internationalOGCallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_internationalOGCallsNotToHPLMN_CountryBarred /* IMPORTED_LONG_NAMED_BIT */, internationalOGCallsNotToHPLMN_CountryBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_interzonalOGCallsBarred /* IMPORTED_LONG_NAMED_BIT */, interzonalOGCallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_interzonalOGCallsNotToHPLMN_CountryBarred /* IMPORTED_LONG_NAMED_BIT */, interzonalOGCallsNotToHPLMN_CountryBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_interzonalOGCallsAndInternationalOGCallsNotToHPLMN_CountryBarred /* IMPORTED_LONG_NAMED_BIT */, interzonalOGCallsAndInternationalOGCallsNotToHPLMN_CountryBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_premiumRateInformationOGCallsBarred /* IMPORTED_LONG_NAMED_BIT */, premiumRateInformationOGCallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_premiumRateEntertainementOGCallsBarred /* IMPORTED_LONG_NAMED_BIT */, premiumRateEntertainementOGCallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_ss_AccessBarred /* IMPORTED_LONG_NAMED_BIT */, ss_AccessBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_allECT_Barred /* IMPORTED_LONG_NAMED_BIT */, allECT_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_chargeableECT_Barred /* IMPORTED_LONG_NAMED_BIT */, chargeableECT_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_internationalECT_Barred /* IMPORTED_LONG_NAMED_BIT */, internationalECT_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_interzonalECT_Barred /* IMPORTED_LONG_NAMED_BIT */, interzonalECT_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_doublyChargeableECT_Barred /* IMPORTED_LONG_NAMED_BIT */, doublyChargeableECT_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_multipleECT_Barred /* IMPORTED_LONG_NAMED_BIT */, multipleECT_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_allPacketOrientedServicesBarred /* IMPORTED_LONG_NAMED_BIT */, allPacketOrientedServicesBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamerAccessToHPLMN_AP_Barred /* IMPORTED_LONG_NAMED_BIT */, roamerAccessToHPLMN_AP_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamerAccessToVPLMN_AP_Barred /* IMPORTED_LONG_NAMED_BIT */, roamerAccessToVPLMN_AP_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamingOutsidePLMNOG_CallsBarred /* IMPORTED_LONG_NAMED_BIT */, roamingOutsidePLMNOG_CallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_allIC_CallsBarred /* IMPORTED_LONG_NAMED_BIT */, allIC_CallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamingOutsidePLMNIC_CallsBarred /* IMPORTED_LONG_NAMED_BIT */, roamingOutsidePLMNIC_CallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamingOutsidePLMNICountryIC_CallsBarred /* IMPORTED_LONG_NAMED_BIT */, roamingOutsidePLMNICountryIC_CallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamingOutsidePLMN_Barred /* IMPORTED_LONG_NAMED_BIT */, roamingOutsidePLMN_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamingOutsidePLMN_CountryBarred /* IMPORTED_LONG_NAMED_BIT */, roamingOutsidePLMN_CountryBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_registrationAllCF_Barred /* IMPORTED_LONG_NAMED_BIT */, registrationAllCF_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_registrationCFNotToHPLMN_Barred /* IMPORTED_LONG_NAMED_BIT */, registrationCFNotToHPLMN_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_registrationInterzonalCF_Barred /* IMPORTED_LONG_NAMED_BIT */, registrationInterzonalCF_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_registrationInterzonalCFNotToHPLMN_Barred /* IMPORTED_LONG_NAMED_BIT */, registrationInterzonalCFNotToHPLMN_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_registrationInternationalCF_Barred /* IMPORTED_LONG_NAMED_BIT */, registrationInternationalCF_Barred /* IMPORTED_SHORT_NAMED_BIT */, _decode_ODB_GeneralData, _encode_ODB_GeneralData } from "../MAP-MS-DataTypes/ODB-GeneralData.ta.mjs";
// export { ODB_GeneralData, ODB_GeneralData_allOG_CallsBarred /* IMPORTED_LONG_NAMED_BIT */, allOG_CallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_internationalOGCallsBarred /* IMPORTED_LONG_NAMED_BIT */, internationalOGCallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_internationalOGCallsNotToHPLMN_CountryBarred /* IMPORTED_LONG_NAMED_BIT */, internationalOGCallsNotToHPLMN_CountryBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_interzonalOGCallsBarred /* IMPORTED_LONG_NAMED_BIT */, interzonalOGCallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_interzonalOGCallsNotToHPLMN_CountryBarred /* IMPORTED_LONG_NAMED_BIT */, interzonalOGCallsNotToHPLMN_CountryBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_interzonalOGCallsAndInternationalOGCallsNotToHPLMN_CountryBarred /* IMPORTED_LONG_NAMED_BIT */, interzonalOGCallsAndInternationalOGCallsNotToHPLMN_CountryBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_premiumRateInformationOGCallsBarred /* IMPORTED_LONG_NAMED_BIT */, premiumRateInformationOGCallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_premiumRateEntertainementOGCallsBarred /* IMPORTED_LONG_NAMED_BIT */, premiumRateEntertainementOGCallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_ss_AccessBarred /* IMPORTED_LONG_NAMED_BIT */, ss_AccessBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_allECT_Barred /* IMPORTED_LONG_NAMED_BIT */, allECT_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_chargeableECT_Barred /* IMPORTED_LONG_NAMED_BIT */, chargeableECT_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_internationalECT_Barred /* IMPORTED_LONG_NAMED_BIT */, internationalECT_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_interzonalECT_Barred /* IMPORTED_LONG_NAMED_BIT */, interzonalECT_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_doublyChargeableECT_Barred /* IMPORTED_LONG_NAMED_BIT */, doublyChargeableECT_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_multipleECT_Barred /* IMPORTED_LONG_NAMED_BIT */, multipleECT_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_allPacketOrientedServicesBarred /* IMPORTED_LONG_NAMED_BIT */, allPacketOrientedServicesBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamerAccessToHPLMN_AP_Barred /* IMPORTED_LONG_NAMED_BIT */, roamerAccessToHPLMN_AP_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamerAccessToVPLMN_AP_Barred /* IMPORTED_LONG_NAMED_BIT */, roamerAccessToVPLMN_AP_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamingOutsidePLMNOG_CallsBarred /* IMPORTED_LONG_NAMED_BIT */, roamingOutsidePLMNOG_CallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_allIC_CallsBarred /* IMPORTED_LONG_NAMED_BIT */, allIC_CallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamingOutsidePLMNIC_CallsBarred /* IMPORTED_LONG_NAMED_BIT */, roamingOutsidePLMNIC_CallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamingOutsidePLMNICountryIC_CallsBarred /* IMPORTED_LONG_NAMED_BIT */, roamingOutsidePLMNICountryIC_CallsBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamingOutsidePLMN_Barred /* IMPORTED_LONG_NAMED_BIT */, roamingOutsidePLMN_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_roamingOutsidePLMN_CountryBarred /* IMPORTED_LONG_NAMED_BIT */, roamingOutsidePLMN_CountryBarred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_registrationAllCF_Barred /* IMPORTED_LONG_NAMED_BIT */, registrationAllCF_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_registrationCFNotToHPLMN_Barred /* IMPORTED_LONG_NAMED_BIT */, registrationCFNotToHPLMN_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_registrationInterzonalCF_Barred /* IMPORTED_LONG_NAMED_BIT */, registrationInterzonalCF_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_registrationInterzonalCFNotToHPLMN_Barred /* IMPORTED_LONG_NAMED_BIT */, registrationInterzonalCFNotToHPLMN_Barred /* IMPORTED_SHORT_NAMED_BIT */, ODB_GeneralData_registrationInternationalCF_Barred /* IMPORTED_LONG_NAMED_BIT */, registrationInternationalCF_Barred /* IMPORTED_SHORT_NAMED_BIT */, _decode_ODB_GeneralData, _encode_ODB_GeneralData } from "../MAP-MS-DataTypes/ODB-GeneralData.ta.mjs";
import { ODB_HPLMN_Data, ODB_HPLMN_Data_plmn_SpecificBarringType1 /* IMPORTED_LONG_NAMED_BIT */, plmn_SpecificBarringType1 /* IMPORTED_SHORT_NAMED_BIT */, ODB_HPLMN_Data_plmn_SpecificBarringType2 /* IMPORTED_LONG_NAMED_BIT */, plmn_SpecificBarringType2 /* IMPORTED_SHORT_NAMED_BIT */, ODB_HPLMN_Data_plmn_SpecificBarringType3 /* IMPORTED_LONG_NAMED_BIT */, plmn_SpecificBarringType3 /* IMPORTED_SHORT_NAMED_BIT */, ODB_HPLMN_Data_plmn_SpecificBarringType4 /* IMPORTED_LONG_NAMED_BIT */, plmn_SpecificBarringType4 /* IMPORTED_SHORT_NAMED_BIT */, _decode_ODB_HPLMN_Data, _encode_ODB_HPLMN_Data } from "../MAP-MS-DataTypes/ODB-HPLMN-Data.ta.mjs";
// export { ODB_HPLMN_Data, ODB_HPLMN_Data_plmn_SpecificBarringType1 /* IMPORTED_LONG_NAMED_BIT */, plmn_SpecificBarringType1 /* IMPORTED_SHORT_NAMED_BIT */, ODB_HPLMN_Data_plmn_SpecificBarringType2 /* IMPORTED_LONG_NAMED_BIT */, plmn_SpecificBarringType2 /* IMPORTED_SHORT_NAMED_BIT */, ODB_HPLMN_Data_plmn_SpecificBarringType3 /* IMPORTED_LONG_NAMED_BIT */, plmn_SpecificBarringType3 /* IMPORTED_SHORT_NAMED_BIT */, ODB_HPLMN_Data_plmn_SpecificBarringType4 /* IMPORTED_LONG_NAMED_BIT */, plmn_SpecificBarringType4 /* IMPORTED_SHORT_NAMED_BIT */, _decode_ODB_HPLMN_Data, _encode_ODB_HPLMN_Data } from "../MAP-MS-DataTypes/ODB-HPLMN-Data.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary ODB_Data
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ODB-Data ::= SEQUENCE {
 *     odb-GeneralData    ODB-GeneralData,
 *     odb-HPLMN-Data    ODB-HPLMN-Data    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class ODB_Data {
    constructor (
        /**
         * @summary `odb_GeneralData`.
         * @public
         * @readonly
         */
        readonly odb_GeneralData: ODB_GeneralData,
        /**
         * @summary `odb_HPLMN_Data`.
         * @public
         * @readonly
         */
        readonly odb_HPLMN_Data: OPTIONAL<ODB_HPLMN_Data>,
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
     * @summary Restructures an object into a ODB_Data
     * @description
     * 
     * This takes an `object` and converts it to a `ODB_Data`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ODB_Data`.
     * @returns {ODB_Data}
     */
    public static _from_object (_o: { [_K in keyof (ODB_Data)]: (ODB_Data)[_K] }): ODB_Data {
        return new ODB_Data(_o.odb_GeneralData, _o.odb_HPLMN_Data, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ODB_Data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ODB_Data: $.ComponentSpec[] = [
    new $.ComponentSpec("odb-GeneralData", false, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("odb-HPLMN-Data", true, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ODB_Data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ODB_Data: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ODB_Data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ODB_Data: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ODB_Data: $.ASN1Decoder<ODB_Data> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ODB_Data
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ODB_Data (el: _Element): ODB_Data {
    if (!_cached_decoder_for_ODB_Data) { _cached_decoder_for_ODB_Data = function (el: _Element): ODB_Data {
    let odb_GeneralData!: ODB_GeneralData;
    let odb_HPLMN_Data: OPTIONAL<ODB_HPLMN_Data>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "odb-GeneralData": (_el: _Element): void => { odb_GeneralData = _decode_ODB_GeneralData(_el); },
        "odb-HPLMN-Data": (_el: _Element): void => { odb_HPLMN_Data = _decode_ODB_HPLMN_Data(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ODB_Data,
        _extension_additions_list_spec_for_ODB_Data,
        _root_component_type_list_2_spec_for_ODB_Data,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ODB_Data(
        odb_GeneralData,
        odb_HPLMN_Data,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ODB_Data(el);
}

let _cached_encoder_for_ODB_Data: $.ASN1Encoder<ODB_Data> | null = null;

/**
 * @summary Encodes a(n) ODB_Data into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ODB_Data, encoded as an ASN.1 Element.
 */
export
function _encode_ODB_Data (value: ODB_Data, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ODB_Data) { _cached_encoder_for_ODB_Data = function (value: ODB_Data, elGetter: $.ASN1Encoder<ODB_Data>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ODB_GeneralData(value.odb_GeneralData, $.BER),
            /* IF_ABSENT  */ ((value.odb_HPLMN_Data === undefined) ? undefined : _encode_ODB_HPLMN_Data(value.odb_HPLMN_Data, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ODB_Data(value, elGetter);
}


/* eslint-enable */
