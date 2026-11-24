/* eslint-disable */
import {
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BDBFormat, _decode_BDBFormat, _encode_BDBFormat } from "../CBEFF-DATA-ELEMENTS/BDBFormat.ta.mjs";
import { BDBIndex, _decode_BDBIndex, _encode_BDBIndex } from "../CBEFF-DATA-ELEMENTS/BDBIndex.ta.mjs";
import { BiometricSubtype, _decode_BiometricSubtype, _encode_BiometricSubtype } from "../CBEFF-DATA-ELEMENTS/BiometricSubtype.ta.mjs";
import { BiometricType, _decode_BiometricType, _encode_BiometricType } from "../CBEFF-DATA-ELEMENTS/BiometricType.ta.mjs";
import { BIRIndex, _decode_BIRIndex, _encode_BIRIndex } from "../CBEFF-DATA-ELEMENTS/BIRIndex.ta.mjs";
import { ChallengeResponse, _decode_ChallengeResponse, _encode_ChallengeResponse } from "../CBEFF-DATA-ELEMENTS/ChallengeResponse.ta.mjs";
import { Creator, _decode_Creator, _encode_Creator } from "../CBEFF-DATA-ELEMENTS/Creator.ta.mjs";
import { Payload, _decode_Payload, _encode_Payload } from "../CBEFF-DATA-ELEMENTS/Payload.ta.mjs";
import { ProcessedLevel, _decode_ProcessedLevel, _encode_ProcessedLevel, _enum_for_ProcessedLevel } from "../CBEFF-DATA-ELEMENTS/ProcessedLevel.ta.mjs";
import { Product, _decode_Product, _encode_Product } from "../CBEFF-DATA-ELEMENTS/Product.ta.mjs";
import { Purpose, _decode_Purpose, _encode_Purpose, _enum_for_Purpose } from "../CBEFF-DATA-ELEMENTS/Purpose.ta.mjs";
import { Quality, _decode_Quality, _encode_Quality } from "../CBEFF-DATA-ELEMENTS/Quality.ta.mjs";
import { RegistryID, _decode_RegistryID, _encode_RegistryID } from "../CBEFF-DATA-ELEMENTS/RegistryID.ta.mjs";
import { BIR_children_child, _decode_BIR_children_child, _encode_BIR_children_child } from "../CBEFF-FULL-COMPLEX-PATRON-FORMAT/BIR-children-child.ta.mjs";
import { BIR_fieldPresence, _decode_BIR_fieldPresence, _encode_BIR_fieldPresence } from "../CBEFF-FULL-COMPLEX-PATRON-FORMAT/BIR-fieldPresence.ta.mjs";


/**
 * @summary BIR
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BIR ::= SEQUENCE {
 *     patronHeaderVersion     INTEGER (0..255),
 *     cbeffVersion            INTEGER (0..255),
 *     fieldPresence           SEQUENCE {
 *         bdbFormat               BOOLEAN,
 *         bdbEncryption           BOOLEAN,
 *         bdbBiometricType        BOOLEAN,
 *         bdbBiometricSubtype     BOOLEAN,
 *         bdbChallengeResponse    BOOLEAN,
 *         bdbCreationDate         BOOLEAN,
 *         bdbIndex                BOOLEAN,
 *         bdbProcessedLevel       BOOLEAN,
 *         bdbProduct              BOOLEAN,
 *         bdbCaptureDevice        BOOLEAN,
 *         bdbFeatureExtAlg        BOOLEAN,
 *         bdbComparisonAlg        BOOLEAN,
 *         bdbQualityAlg           BOOLEAN,
 *         bdbCompressionAlg       BOOLEAN,
 *         bdbPurpose              BOOLEAN,
 *         bdbQuality              BOOLEAN,
 *         bdbValidityPeriod       BOOLEAN,
 *         birCreationDate         BOOLEAN,
 *         birCreator              BOOLEAN,
 *         birIndex                BOOLEAN,
 *         birValidityPeriod       BOOLEAN,
 *         sbFormat                BOOLEAN,
 *         bdb                     BOOLEAN,
 *         children                BOOLEAN,
 *         sb                      BOOLEAN
 *     },
 *     bdbFormat               BDBFormat OPTIONAL,
 *     bdbEncryption           INTEGER (0..255) OPTIONAL,
 *     birIntegrity            INTEGER (0..255),
 *     bdbBiometricType        BiometricType DEFAULT noValueAvailable,
 *     bdbBiometricSubtype     BiometricSubtype DEFAULT noValueAvailable,
 *     bdbChallengeResponse    ChallengeResponse OPTIONAL,
 *     bdbCreationDate         OCTET STRING (SIZE (8..15)) OPTIONAL,
 *     bdbIndex                BDBIndex OPTIONAL,
 *     bdbProcessedLevel       ProcessedLevel OPTIONAL,
 *     bdbProduct              Product OPTIONAL,
 *     bdbCaptureDevice        RegistryID OPTIONAL,
 *     bdbFeatureExtAlg        RegistryID OPTIONAL,
 *     bdbComparisonAlg        RegistryID OPTIONAL,
 *     bdbQualityAlg           RegistryID OPTIONAL,
 *     bdbCompressionAlg       RegistryID OPTIONAL,
 *     bdbPurpose              Purpose OPTIONAL,
 *     bdbQuality              Quality OPTIONAL,
 *     bdbValidityPeriod       OCTET STRING (SIZE (15..31)) OPTIONAL,
 *     birCreationDate         OCTET STRING (SIZE (8..15)) OPTIONAL,
 *     birCreator              Creator OPTIONAL,
 *     birIndex                BIRIndex OPTIONAL,
 *     birPayload              Payload OPTIONAL,
 *     birValidityPeriod       OCTET STRING (SIZE (15..31)) OPTIONAL,
 *     sbFormat                RegistryID OPTIONAL,
 *     bdb                     OCTET STRING (SIZE (0..4294967295)) OPTIONAL,
 *     children                SEQUENCE (SIZE(0..255)) OF child SEQUENCE {
 *         childBirPatronFormat    RegistryID,
 *         childBir                OCTET STRING (SIZE (0..4294967295))
 *     },
 *     sb                      OCTET STRING (SIZE (0..4294967295)) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class BIR {
    /**
     * @summary `patronHeaderVersion`.
     * @public
     * @readonly
     */
    readonly patronHeaderVersion: INTEGER;
    /**
     * @summary `cbeffVersion`.
     * @public
     * @readonly
     */
    readonly cbeffVersion: INTEGER;
    /**
     * @summary `fieldPresence`.
     * @public
     * @readonly
     */
    readonly fieldPresence: BIR_fieldPresence;
    /**
     * @summary `bdbFormat`.
     * @public
     * @readonly
     */
    readonly bdbFormat: OPTIONAL<BDBFormat>;
    /**
     * @summary `bdbEncryption`.
     * @public
     * @readonly
     */
    readonly bdbEncryption: OPTIONAL<INTEGER>;
    /**
     * @summary `birIntegrity`.
     * @public
     * @readonly
     */
    readonly birIntegrity: INTEGER;
    /**
     * @summary `bdbBiometricType`.
     * @public
     * @readonly
     */
    readonly bdbBiometricType: OPTIONAL<BiometricType>;
    /**
     * @summary `bdbBiometricSubtype`.
     * @public
     * @readonly
     */
    readonly bdbBiometricSubtype: OPTIONAL<BiometricSubtype>;
    /**
     * @summary `bdbChallengeResponse`.
     * @public
     * @readonly
     */
    readonly bdbChallengeResponse: OPTIONAL<ChallengeResponse>;
    /**
     * @summary `bdbCreationDate`.
     * @public
     * @readonly
     */
    readonly bdbCreationDate: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `bdbIndex`.
     * @public
     * @readonly
     */
    readonly bdbIndex: OPTIONAL<BDBIndex>;
    /**
     * @summary `bdbProcessedLevel`.
     * @public
     * @readonly
     */
    readonly bdbProcessedLevel: OPTIONAL<ProcessedLevel>;
    /**
     * @summary `bdbProduct`.
     * @public
     * @readonly
     */
    readonly bdbProduct: OPTIONAL<Product>;
    /**
     * @summary `bdbCaptureDevice`.
     * @public
     * @readonly
     */
    readonly bdbCaptureDevice: OPTIONAL<RegistryID>;
    /**
     * @summary `bdbFeatureExtAlg`.
     * @public
     * @readonly
     */
    readonly bdbFeatureExtAlg: OPTIONAL<RegistryID>;
    /**
     * @summary `bdbComparisonAlg`.
     * @public
     * @readonly
     */
    readonly bdbComparisonAlg: OPTIONAL<RegistryID>;
    /**
     * @summary `bdbQualityAlg`.
     * @public
     * @readonly
     */
    readonly bdbQualityAlg: OPTIONAL<RegistryID>;
    /**
     * @summary `bdbCompressionAlg`.
     * @public
     * @readonly
     */
    readonly bdbCompressionAlg: OPTIONAL<RegistryID>;
    /**
     * @summary `bdbPurpose`.
     * @public
     * @readonly
     */
    readonly bdbPurpose: OPTIONAL<Purpose>;
    /**
     * @summary `bdbQuality`.
     * @public
     * @readonly
     */
    readonly bdbQuality: OPTIONAL<Quality>;
    /**
     * @summary `bdbValidityPeriod`.
     * @public
     * @readonly
     */
    readonly bdbValidityPeriod: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `birCreationDate`.
     * @public
     * @readonly
     */
    readonly birCreationDate: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `birCreator`.
     * @public
     * @readonly
     */
    readonly birCreator: OPTIONAL<Creator>;
    /**
     * @summary `birIndex`.
     * @public
     * @readonly
     */
    readonly birIndex: OPTIONAL<BIRIndex>;
    /**
     * @summary `birPayload`.
     * @public
     * @readonly
     */
    readonly birPayload: OPTIONAL<Payload>;
    /**
     * @summary `birValidityPeriod`.
     * @public
     * @readonly
     */
    readonly birValidityPeriod: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sbFormat`.
     * @public
     * @readonly
     */
    readonly sbFormat: OPTIONAL<RegistryID>;
    /**
     * @summary `bdb`.
     * @public
     * @readonly
     */
    readonly bdb: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `children`.
     * @public
     * @readonly
     */
    readonly children: BIR_children_child[];
    /**
     * @summary `sb`.
     * @public
     * @readonly
     */
    readonly sb: OPTIONAL<OCTET_STRING>;

    constructor (
        patronHeaderVersion: INTEGER,
        cbeffVersion: INTEGER,
        fieldPresence: BIR_fieldPresence,
        bdbFormat: OPTIONAL<BDBFormat>,
        bdbEncryption: OPTIONAL<INTEGER>,
        birIntegrity: INTEGER,
        bdbBiometricType: OPTIONAL<BiometricType>,
        bdbBiometricSubtype: OPTIONAL<BiometricSubtype>,
        bdbChallengeResponse: OPTIONAL<ChallengeResponse>,
        bdbCreationDate: OPTIONAL<OCTET_STRING>,
        bdbIndex: OPTIONAL<BDBIndex>,
        bdbProcessedLevel: OPTIONAL<ProcessedLevel>,
        bdbProduct: OPTIONAL<Product>,
        bdbCaptureDevice: OPTIONAL<RegistryID>,
        bdbFeatureExtAlg: OPTIONAL<RegistryID>,
        bdbComparisonAlg: OPTIONAL<RegistryID>,
        bdbQualityAlg: OPTIONAL<RegistryID>,
        bdbCompressionAlg: OPTIONAL<RegistryID>,
        bdbPurpose: OPTIONAL<Purpose>,
        bdbQuality: OPTIONAL<Quality>,
        bdbValidityPeriod: OPTIONAL<OCTET_STRING>,
        birCreationDate: OPTIONAL<OCTET_STRING>,
        birCreator: OPTIONAL<Creator>,
        birIndex: OPTIONAL<BIRIndex>,
        birPayload: OPTIONAL<Payload>,
        birValidityPeriod: OPTIONAL<OCTET_STRING>,
        sbFormat: OPTIONAL<RegistryID>,
        bdb: OPTIONAL<OCTET_STRING>,
        children: BIR_children_child[],
        sb?: OPTIONAL<OCTET_STRING>
    ) {
        this.patronHeaderVersion = patronHeaderVersion;
        this.cbeffVersion = cbeffVersion;
        this.fieldPresence = fieldPresence;
        this.bdbFormat = bdbFormat;
        this.bdbEncryption = bdbEncryption;
        this.birIntegrity = birIntegrity;
        this.bdbBiometricType = bdbBiometricType;
        this.bdbBiometricSubtype = bdbBiometricSubtype;
        this.bdbChallengeResponse = bdbChallengeResponse;
        this.bdbCreationDate = bdbCreationDate;
        this.bdbIndex = bdbIndex;
        this.bdbProcessedLevel = bdbProcessedLevel;
        this.bdbProduct = bdbProduct;
        this.bdbCaptureDevice = bdbCaptureDevice;
        this.bdbFeatureExtAlg = bdbFeatureExtAlg;
        this.bdbComparisonAlg = bdbComparisonAlg;
        this.bdbQualityAlg = bdbQualityAlg;
        this.bdbCompressionAlg = bdbCompressionAlg;
        this.bdbPurpose = bdbPurpose;
        this.bdbQuality = bdbQuality;
        this.bdbValidityPeriod = bdbValidityPeriod;
        this.birCreationDate = birCreationDate;
        this.birCreator = birCreator;
        this.birIndex = birIndex;
        this.birPayload = birPayload;
        this.birValidityPeriod = birValidityPeriod;
        this.sbFormat = sbFormat;
        this.bdb = bdb;
        this.children = children;
        this.sb = sb;
    }

    /**
     * @summary Restructures an object into a BIR
     * @description
     * 
     * This takes an `object` and converts it to a `BIR`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BIR`.
     * @returns {BIR}
     */
    public static _from_object (_o: { [_K in keyof (BIR)]: (BIR)[_K] }): BIR {
        return new BIR(_o.patronHeaderVersion, _o.cbeffVersion, _o.fieldPresence, _o.bdbFormat, _o.bdbEncryption, _o.birIntegrity, _o.bdbBiometricType, _o.bdbBiometricSubtype, _o.bdbChallengeResponse, _o.bdbCreationDate, _o.bdbIndex, _o.bdbProcessedLevel, _o.bdbProduct, _o.bdbCaptureDevice, _o.bdbFeatureExtAlg, _o.bdbComparisonAlg, _o.bdbQualityAlg, _o.bdbCompressionAlg, _o.bdbPurpose, _o.bdbQuality, _o.bdbValidityPeriod, _o.birCreationDate, _o.birCreator, _o.birIndex, _o.birPayload, _o.birValidityPeriod, _o.sbFormat, _o.bdb, _o.children, _o.sb);
    }

    /**
     * @summary Getter that returns the default value for `bdbBiometricType`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_bdbBiometricType () { return noValueAvailable; }
    /**
     * @summary Getter that returns the default value for `bdbBiometricSubtype`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_bdbBiometricSubtype () { return noValueAvailable; }        /**
         * @summary The enum used as the type of the component `bdbProcessedLevel`
         * @public
         * @static
         */

    public static _enum_for_bdbProcessedLevel: typeof _enum_for_ProcessedLevel = _enum_for_ProcessedLevel;        /**
         * @summary The enum used as the type of the component `bdbPurpose`
         * @public
         * @static
         */

    public static _enum_for_bdbPurpose: typeof _enum_for_Purpose = _enum_for_Purpose;
}

/**
 * @summary The Leading Root Component Types of BIR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BIR: $.ComponentSpec[] = [
    new $.ComponentSpec("patronHeaderVersion", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("cbeffVersion", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("fieldPresence", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("bdbFormat", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("bdbEncryption", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("birIntegrity", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("bdbBiometricType", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("bdbBiometricSubtype", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("bdbChallengeResponse", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("bdbCreationDate", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("bdbIndex", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("bdbProcessedLevel", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("bdbProduct", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("bdbCaptureDevice", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("bdbFeatureExtAlg", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("bdbComparisonAlg", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("bdbQualityAlg", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("bdbCompressionAlg", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("bdbPurpose", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("bdbQuality", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("bdbValidityPeriod", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("birCreationDate", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("birCreator", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("birIndex", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("birPayload", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("birValidityPeriod", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("sbFormat", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("bdb", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("children", false, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("sb", true, $.hasTag(_TagClass.context, 29))
];

/**
 * @summary The Trailing Root Component Types of BIR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BIR: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BIR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BIR: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BIR: $.ASN1Decoder<BIR> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BIR
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BIR (el: _Element): BIR {
    if (!_cached_decoder_for_BIR) { _cached_decoder_for_BIR = function (el: _Element): BIR {
    let patronHeaderVersion!: INTEGER;
    let cbeffVersion!: INTEGER;
    let fieldPresence!: BIR_fieldPresence;
    let bdbFormat: OPTIONAL<BDBFormat>;
    let bdbEncryption: OPTIONAL<INTEGER>;
    let birIntegrity!: INTEGER;
    let bdbBiometricType: OPTIONAL<BiometricType> = BIR._default_value_for_bdbBiometricType;
    let bdbBiometricSubtype: OPTIONAL<BiometricSubtype> = BIR._default_value_for_bdbBiometricSubtype;
    let bdbChallengeResponse: OPTIONAL<ChallengeResponse>;
    let bdbCreationDate: OPTIONAL<OCTET_STRING>;
    let bdbIndex: OPTIONAL<BDBIndex>;
    let bdbProcessedLevel: OPTIONAL<ProcessedLevel>;
    let bdbProduct: OPTIONAL<Product>;
    let bdbCaptureDevice: OPTIONAL<RegistryID>;
    let bdbFeatureExtAlg: OPTIONAL<RegistryID>;
    let bdbComparisonAlg: OPTIONAL<RegistryID>;
    let bdbQualityAlg: OPTIONAL<RegistryID>;
    let bdbCompressionAlg: OPTIONAL<RegistryID>;
    let bdbPurpose: OPTIONAL<Purpose>;
    let bdbQuality: OPTIONAL<Quality>;
    let bdbValidityPeriod: OPTIONAL<OCTET_STRING>;
    let birCreationDate: OPTIONAL<OCTET_STRING>;
    let birCreator: OPTIONAL<Creator>;
    let birIndex: OPTIONAL<BIRIndex>;
    let birPayload: OPTIONAL<Payload>;
    let birValidityPeriod: OPTIONAL<OCTET_STRING>;
    let sbFormat: OPTIONAL<RegistryID>;
    let bdb: OPTIONAL<OCTET_STRING>;
    let children!: BIR_children_child[];
    let sb: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "patronHeaderVersion": (_el: _Element): void => { patronHeaderVersion = $._decodeInteger(_el); },
        "cbeffVersion": (_el: _Element): void => { cbeffVersion = $._decodeInteger(_el); },
        "fieldPresence": (_el: _Element): void => { fieldPresence = _decode_BIR_fieldPresence(_el); },
        "bdbFormat": (_el: _Element): void => { bdbFormat = _decode_BDBFormat(_el); },
        "bdbEncryption": (_el: _Element): void => { bdbEncryption = $._decodeInteger(_el); },
        "birIntegrity": (_el: _Element): void => { birIntegrity = $._decodeInteger(_el); },
        "bdbBiometricType": (_el: _Element): void => { bdbBiometricType = _decode_BiometricType(_el); },
        "bdbBiometricSubtype": (_el: _Element): void => { bdbBiometricSubtype = _decode_BiometricSubtype(_el); },
        "bdbChallengeResponse": (_el: _Element): void => { bdbChallengeResponse = _decode_ChallengeResponse(_el); },
        "bdbCreationDate": (_el: _Element): void => { bdbCreationDate = $._decodeOctetString(_el); },
        "bdbIndex": (_el: _Element): void => { bdbIndex = _decode_BDBIndex(_el); },
        "bdbProcessedLevel": (_el: _Element): void => { bdbProcessedLevel = _decode_ProcessedLevel(_el); },
        "bdbProduct": (_el: _Element): void => { bdbProduct = _decode_Product(_el); },
        "bdbCaptureDevice": (_el: _Element): void => { bdbCaptureDevice = _decode_RegistryID(_el); },
        "bdbFeatureExtAlg": (_el: _Element): void => { bdbFeatureExtAlg = _decode_RegistryID(_el); },
        "bdbComparisonAlg": (_el: _Element): void => { bdbComparisonAlg = _decode_RegistryID(_el); },
        "bdbQualityAlg": (_el: _Element): void => { bdbQualityAlg = _decode_RegistryID(_el); },
        "bdbCompressionAlg": (_el: _Element): void => { bdbCompressionAlg = _decode_RegistryID(_el); },
        "bdbPurpose": (_el: _Element): void => { bdbPurpose = _decode_Purpose(_el); },
        "bdbQuality": (_el: _Element): void => { bdbQuality = _decode_Quality(_el); },
        "bdbValidityPeriod": (_el: _Element): void => { bdbValidityPeriod = $._decodeOctetString(_el); },
        "birCreationDate": (_el: _Element): void => { birCreationDate = $._decodeOctetString(_el); },
        "birCreator": (_el: _Element): void => { birCreator = _decode_Creator(_el); },
        "birIndex": (_el: _Element): void => { birIndex = _decode_BIRIndex(_el); },
        "birPayload": (_el: _Element): void => { birPayload = _decode_Payload(_el); },
        "birValidityPeriod": (_el: _Element): void => { birValidityPeriod = $._decodeOctetString(_el); },
        "sbFormat": (_el: _Element): void => { sbFormat = _decode_RegistryID(_el); },
        "bdb": (_el: _Element): void => { bdb = $._decodeOctetString(_el); },
        "children": (_el: _Element): void => { children = $._decodeSequenceOf<BIR_children_child>(() => _decode_BIR_children_child)(_el); },
        "sb": (_el: _Element): void => { sb = $._decodeOctetString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BIR,
        _extension_additions_list_spec_for_BIR,
        _root_component_type_list_2_spec_for_BIR,
        undefined,
    );
    return new BIR(
        patronHeaderVersion,
        cbeffVersion,
        fieldPresence,
        bdbFormat,
        bdbEncryption,
        birIntegrity,
        bdbBiometricType,
        bdbBiometricSubtype,
        bdbChallengeResponse,
        bdbCreationDate,
        bdbIndex,
        bdbProcessedLevel,
        bdbProduct,
        bdbCaptureDevice,
        bdbFeatureExtAlg,
        bdbComparisonAlg,
        bdbQualityAlg,
        bdbCompressionAlg,
        bdbPurpose,
        bdbQuality,
        bdbValidityPeriod,
        birCreationDate,
        birCreator,
        birIndex,
        birPayload,
        birValidityPeriod,
        sbFormat,
        bdb,
        children,
        sb
    );
}; }
    return _cached_decoder_for_BIR(el);
}

let _cached_encoder_for_BIR: $.ASN1Encoder<BIR> | null = null;

/**
 * @summary Encodes a(n) BIR into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BIR, encoded as an ASN.1 Element.
 */
export
function _encode_BIR (value: BIR, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BIR) { _cached_encoder_for_BIR = function (value: BIR, elGetter: $.ASN1Encoder<BIR>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.patronHeaderVersion, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.cbeffVersion, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_BIR_fieldPresence, $.BER)(value.fieldPresence, $.BER));
    if (value.bdbFormat !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_BDBFormat, $.BER)(value.bdbFormat, $.BER));
    }
    if (value.bdbEncryption !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.bdbEncryption, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.birIntegrity, $.BER));
    if (value.bdbBiometricType !== undefined && !$.deepEq(value.bdbBiometricType, BIR._default_value_for_bdbBiometricType)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 6, () => _encode_BiometricType, $.BER)(value.bdbBiometricType, $.BER));
    }
    if (value.bdbBiometricSubtype !== undefined && !$.deepEq(value.bdbBiometricSubtype, BIR._default_value_for_bdbBiometricSubtype)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 7, () => _encode_BiometricSubtype, $.BER)(value.bdbBiometricSubtype, $.BER));
    }
    if (value.bdbChallengeResponse !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_ChallengeResponse, $.BER)(value.bdbChallengeResponse, $.BER));
    }
    if (value.bdbCreationDate !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.bdbCreationDate, $.BER));
    }
    if (value.bdbIndex !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_BDBIndex, $.BER)(value.bdbIndex, $.BER));
    }
    if (value.bdbProcessedLevel !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_ProcessedLevel, $.BER)(value.bdbProcessedLevel, $.BER));
    }
    if (value.bdbProduct !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_Product, $.BER)(value.bdbProduct, $.BER));
    }
    if (value.bdbCaptureDevice !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_RegistryID, $.BER)(value.bdbCaptureDevice, $.BER));
    }
    if (value.bdbFeatureExtAlg !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_RegistryID, $.BER)(value.bdbFeatureExtAlg, $.BER));
    }
    if (value.bdbComparisonAlg !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_RegistryID, $.BER)(value.bdbComparisonAlg, $.BER));
    }
    if (value.bdbQualityAlg !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_RegistryID, $.BER)(value.bdbQualityAlg, $.BER));
    }
    if (value.bdbCompressionAlg !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_RegistryID, $.BER)(value.bdbCompressionAlg, $.BER));
    }
    if (value.bdbPurpose !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_Purpose, $.BER)(value.bdbPurpose, $.BER));
    }
    if (value.bdbQuality !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => _encode_Quality, $.BER)(value.bdbQuality, $.BER));
    }
    if (value.bdbValidityPeriod !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.bdbValidityPeriod, $.BER));
    }
    if (value.birCreationDate !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeOctetString, $.BER)(value.birCreationDate, $.BER));
    }
    if (value.birCreator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_Creator, $.BER)(value.birCreator, $.BER));
    }
    if (value.birIndex !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => _encode_BIRIndex, $.BER)(value.birIndex, $.BER));
    }
    if (value.birPayload !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_Payload, $.BER)(value.birPayload, $.BER));
    }
    if (value.birValidityPeriod !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeOctetString, $.BER)(value.birValidityPeriod, $.BER));
    }
    if (value.sbFormat !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => _encode_RegistryID, $.BER)(value.sbFormat, $.BER));
    }
    if (value.bdb !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => $._encodeOctetString, $.BER)(value.bdb, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 28, () => $._encodeSequenceOf<BIR_children_child>(() => _encode_BIR_children_child, $.BER), $.BER)(value.children, $.BER));
    if (value.sb !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeOctetString, $.BER)(value.sb, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_BIR(value, elGetter);
}


/* eslint-enable */
