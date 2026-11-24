/* eslint-disable */
import {
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type BDBCreationDate, _decode_BDBCreationDate, _encode_BDBCreationDate } from "../CBEFF-DATA-ELEMENTS/BDBCreationDate.ta.mjs";
import { BDBFormat, _decode_BDBFormat, _encode_BDBFormat } from "../CBEFF-DATA-ELEMENTS/BDBFormat.ta.mjs";
import { type BDBIndex, _decode_BDBIndex, _encode_BDBIndex } from "../CBEFF-DATA-ELEMENTS/BDBIndex.ta.mjs";
import { type BiometricDataBlock, _decode_BiometricDataBlock, _encode_BiometricDataBlock } from "../CBEFF-DATA-ELEMENTS/BiometricDataBlock.ta.mjs";
import { type BiometricSubtype, BiometricSubtype_noValueAvailable, _decode_BiometricSubtype, _encode_BiometricSubtype } from "../CBEFF-DATA-ELEMENTS/BiometricSubtype.ta.mjs";
import { type BiometricType, BiometricType_noValueAvailable, _decode_BiometricType, _encode_BiometricType } from "../CBEFF-DATA-ELEMENTS/BiometricType.ta.mjs";
import { type BIRCreationDate, _decode_BIRCreationDate, _encode_BIRCreationDate } from "../CBEFF-DATA-ELEMENTS/BIRCreationDate.ta.mjs";
import { type BIRIndex, _decode_BIRIndex, _encode_BIRIndex } from "../CBEFF-DATA-ELEMENTS/BIRIndex.ta.mjs";
import { type ChallengeResponse, _decode_ChallengeResponse, _encode_ChallengeResponse } from "../CBEFF-DATA-ELEMENTS/ChallengeResponse.ta.mjs";
import { type Creator, _decode_Creator, _encode_Creator } from "../CBEFF-DATA-ELEMENTS/Creator.ta.mjs";
import { type EncryptionOptions, _decode_EncryptionOptions, _encode_EncryptionOptions } from "../CBEFF-DATA-ELEMENTS/EncryptionOptions.ta.mjs";
import { type IntegrityOptions, _decode_IntegrityOptions, _encode_IntegrityOptions } from "../CBEFF-DATA-ELEMENTS/IntegrityOptions.ta.mjs";
import { type PatronFormat, _decode_PatronFormat, _encode_PatronFormat } from "../CBEFF-DATA-ELEMENTS/PatronFormat.ta.mjs";
import { type Payload, _decode_Payload, _encode_Payload } from "../CBEFF-DATA-ELEMENTS/Payload.ta.mjs";
import { ProcessedLevel, ProcessedLevel_noValueAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_ProcessedLevel, _encode_ProcessedLevel, _enum_for_ProcessedLevel } from "../CBEFF-DATA-ELEMENTS/ProcessedLevel.ta.mjs";
import { type Product, _decode_Product, _encode_Product } from "../CBEFF-DATA-ELEMENTS/Product.ta.mjs";
import { Purpose, Purpose_noValueAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_Purpose, _encode_Purpose, _enum_for_Purpose } from "../CBEFF-DATA-ELEMENTS/Purpose.ta.mjs";
import { type Quality, _decode_Quality, _encode_Quality } from "../CBEFF-DATA-ELEMENTS/Quality.ta.mjs";
import { type SBFormat, _decode_SBFormat, _encode_SBFormat } from "../CBEFF-DATA-ELEMENTS/SBFormat.ta.mjs";
import { type SubheaderCount, _decode_SubheaderCount, _encode_SubheaderCount } from "../CBEFF-DATA-ELEMENTS/SubheaderCount.ta.mjs";
import { ValidityPeriod, _decode_ValidityPeriod, _encode_ValidityPeriod } from "../CBEFF-DATA-ELEMENTS/ValidityPeriod.ta.mjs";
import { Version, _decode_Version, _encode_Version } from "../CBEFF-DATA-ELEMENTS/Version.ta.mjs";
import { AllElementsWithDefaultsBitOriented_fieldPresence, _decode_AllElementsWithDefaultsBitOriented_fieldPresence, _encode_AllElementsWithDefaultsBitOriented_fieldPresence } from "../CBEFF-PRESENCE-BIT-ORIENTED/AllElementsWithDefaultsBitOriented-fieldPresence.ta.mjs";


/**
 * @summary AllElementsWithDefaultsBitOriented
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AllElementsWithDefaultsBitOriented ::= SEQUENCE {
 * / * This patron format contains all data elements but makes full use of default values to allow
 * omission of fields. It encodes each CBEFF data element into a fixed-width bit field. A bit map
 * is present at the start of the encoding to determine which fields are present. * /
 *     format              BDBFormat,
 *     fieldPresence       SEQUENCE {
 *         encryptOpts         BOOLEAN,
 *         integOpts           BOOLEAN,
 *         subHeaderCount      BOOLEAN,
 *         bdbLength           BOOLEAN,
 *         bioType             BOOLEAN,
 *         bioSubtype          BOOLEAN,
 *         chaResp             BOOLEAN,
 *         bdbCreation         BOOLEAN,
 *         bdbIndex            BOOLEAN,
 *         procLevel           BOOLEAN,
 *         product             BOOLEAN,
 *         purpose             BOOLEAN,
 *         quality             BOOLEAN,
 *         bdbValidity         BOOLEAN,
 *         birCreation         BOOLEAN,
 *         birCreator          BOOLEAN,
 *         birIndex            BOOLEAN,
 *         patronFormat        BOOLEAN,
 *         payload             BOOLEAN,
 *         birValidity         BOOLEAN,
 *         patronHdrVersion    BOOLEAN,
 *         sbFormat            BOOLEAN,
 *         cbeffVers           BOOLEAN,
 *         sb                  BOOLEAN
 *         -- Original typo read: sb OCTET STRING BOOLEAN
 *     },
 *     encryptOpts         EncryptionOptions DEFAULT FALSE,
 *     integOpts           IntegrityOptions DEFAULT FALSE,
 *     subHeaderCount      SubheaderCount DEFAULT 0,
 *     bdbLength           INTEGER (0..4294967295) DEFAULT 0,
 *     bioType             BiometricType DEFAULT noValueAvailable,
 *     bioSubtype          BiometricSubtype DEFAULT noValueAvailable,
 *     chaResp             ChallengeResponse OPTIONAL,
 *     bdbCreation         BDBCreationDate OPTIONAL,
 *     bdbIndex            BDBIndex OPTIONAL,
 *     procLevel           ProcessedLevel DEFAULT noValueAvailable,
 *     product             Product OPTIONAL,
 *     purpose             Purpose DEFAULT noValueAvailable,
 *     quality             Quality DEFAULT noValueAvailable,
 *     bdbValidity         ValidityPeriod,
 *     birCreation         BIRCreationDate OPTIONAL,
 *     birCreator          Creator OPTIONAL,
 *     birIndex            BIRIndex OPTIONAL,
 *     patronFormat        PatronFormat OPTIONAL,
 *     payload             Payload OPTIONAL,
 *     birValidity         ValidityPeriod,
 *     -- Component names corrected to match Version (major, minor).
 *     patronHdrVersion    Version DEFAULT {major 1, minor 0},
 *     sbFormat            SBFormat OPTIONAL,
 *     -- Component names corrected to match Version (major, minor).
 *     cbeffVers           Version DEFAULT {major 4, minor 0},
 *     bdb                 BiometricDataBlock,
 *     sb                  OCTET STRING (SIZE(0..4294967295)) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AllElementsWithDefaultsBitOriented {
    /**
     * @summary `format`.
     * @public
     * @readonly
     */
    readonly format: BDBFormat;
    /**
     * @summary `fieldPresence`.
     * @public
     * @readonly
     */
    readonly fieldPresence: AllElementsWithDefaultsBitOriented_fieldPresence;
    /**
     * @summary `encryptOpts`.
     * @public
     * @readonly
     */
    readonly encryptOpts: OPTIONAL<EncryptionOptions>;
    /**
     * @summary `integOpts`.
     * @public
     * @readonly
     */
    readonly integOpts: OPTIONAL<IntegrityOptions>;
    /**
     * @summary `subHeaderCount`.
     * @public
     * @readonly
     */
    readonly subHeaderCount: OPTIONAL<SubheaderCount>;
    /**
     * @summary `bdbLength`.
     * @public
     * @readonly
     */
    readonly bdbLength: OPTIONAL<INTEGER>;
    /**
     * @summary `bioType`.
     * @public
     * @readonly
     */
    readonly bioType: OPTIONAL<BiometricType>;
    /**
     * @summary `bioSubtype`.
     * @public
     * @readonly
     */
    readonly bioSubtype: OPTIONAL<BiometricSubtype>;
    /**
     * @summary `chaResp`.
     * @public
     * @readonly
     */
    readonly chaResp: OPTIONAL<ChallengeResponse>;
    /**
     * @summary `bdbCreation`.
     * @public
     * @readonly
     */
    readonly bdbCreation: OPTIONAL<BDBCreationDate>;
    /**
     * @summary `bdbIndex`.
     * @public
     * @readonly
     */
    readonly bdbIndex: OPTIONAL<BDBIndex>;
    /**
     * @summary `procLevel`.
     * @public
     * @readonly
     */
    readonly procLevel: OPTIONAL<ProcessedLevel>;
    /**
     * @summary `product`.
     * @public
     * @readonly
     */
    readonly product: OPTIONAL<Product>;
    /**
     * @summary `purpose`.
     * @public
     * @readonly
     */
    readonly purpose: OPTIONAL<Purpose>;
    /**
     * @summary `quality`.
     * @public
     * @readonly
     */
    readonly quality: OPTIONAL<Quality>;
    /**
     * @summary `bdbValidity`.
     * @public
     * @readonly
     */
    readonly bdbValidity: ValidityPeriod;
    /**
     * @summary `birCreation`.
     * @public
     * @readonly
     */
    readonly birCreation: OPTIONAL<BIRCreationDate>;
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
     * @summary `patronFormat`.
     * @public
     * @readonly
     */
    readonly patronFormat: OPTIONAL<PatronFormat>;
    /**
     * @summary `payload`.
     * @public
     * @readonly
     */
    readonly payload: OPTIONAL<Payload>;
    /**
     * @summary `birValidity`.
     * @public
     * @readonly
     */
    readonly birValidity: ValidityPeriod;
    /**
     * @summary `patronHdrVersion`.
     * @public
     * @readonly
     */
    readonly patronHdrVersion: OPTIONAL<Version>;
    /**
     * @summary `sbFormat`.
     * @public
     * @readonly
     */
    readonly sbFormat: OPTIONAL<SBFormat>;
    /**
     * @summary `cbeffVers`.
     * @public
     * @readonly
     */
    readonly cbeffVers: OPTIONAL<Version>;
    /**
     * @summary `bdb`.
     * @public
     * @readonly
     */
    readonly bdb: BiometricDataBlock;
    /**
     * @summary `sb`.
     * @public
     * @readonly
     */
    readonly sb: OPTIONAL<OCTET_STRING>;

    constructor (
        format: BDBFormat,
        fieldPresence: AllElementsWithDefaultsBitOriented_fieldPresence,
        encryptOpts: OPTIONAL<EncryptionOptions>,
        integOpts: OPTIONAL<IntegrityOptions>,
        subHeaderCount: OPTIONAL<SubheaderCount>,
        bdbLength: OPTIONAL<INTEGER>,
        bioType: OPTIONAL<BiometricType>,
        bioSubtype: OPTIONAL<BiometricSubtype>,
        chaResp: OPTIONAL<ChallengeResponse>,
        bdbCreation: OPTIONAL<BDBCreationDate>,
        bdbIndex: OPTIONAL<BDBIndex>,
        procLevel: OPTIONAL<ProcessedLevel>,
        product: OPTIONAL<Product>,
        purpose: OPTIONAL<Purpose>,
        quality: OPTIONAL<Quality>,
        bdbValidity: ValidityPeriod,
        birCreation: OPTIONAL<BIRCreationDate>,
        birCreator: OPTIONAL<Creator>,
        birIndex: OPTIONAL<BIRIndex>,
        patronFormat: OPTIONAL<PatronFormat>,
        payload: OPTIONAL<Payload>,
        birValidity: ValidityPeriod,
        patronHdrVersion: OPTIONAL<Version>,
        sbFormat: OPTIONAL<SBFormat>,
        cbeffVers: OPTIONAL<Version>,
        bdb: BiometricDataBlock,
        sb?: OPTIONAL<OCTET_STRING>
    ) {
        this.format = format;
        this.fieldPresence = fieldPresence;
        this.encryptOpts = encryptOpts;
        this.integOpts = integOpts;
        this.subHeaderCount = subHeaderCount;
        this.bdbLength = bdbLength;
        this.bioType = bioType;
        this.bioSubtype = bioSubtype;
        this.chaResp = chaResp;
        this.bdbCreation = bdbCreation;
        this.bdbIndex = bdbIndex;
        this.procLevel = procLevel;
        this.product = product;
        this.purpose = purpose;
        this.quality = quality;
        this.bdbValidity = bdbValidity;
        this.birCreation = birCreation;
        this.birCreator = birCreator;
        this.birIndex = birIndex;
        this.patronFormat = patronFormat;
        this.payload = payload;
        this.birValidity = birValidity;
        this.patronHdrVersion = patronHdrVersion;
        this.sbFormat = sbFormat;
        this.cbeffVers = cbeffVers;
        this.bdb = bdb;
        this.sb = sb;
    }

    /**
     * @summary Restructures an object into a AllElementsWithDefaultsBitOriented
     * @description
     * 
     * This takes an `object` and converts it to a `AllElementsWithDefaultsBitOriented`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AllElementsWithDefaultsBitOriented`.
     * @returns {AllElementsWithDefaultsBitOriented}
     */
    public static _from_object (_o: { [_K in keyof (AllElementsWithDefaultsBitOriented)]: (AllElementsWithDefaultsBitOriented)[_K] }): AllElementsWithDefaultsBitOriented {
        return new AllElementsWithDefaultsBitOriented(_o.format, _o.fieldPresence, _o.encryptOpts, _o.integOpts, _o.subHeaderCount, _o.bdbLength, _o.bioType, _o.bioSubtype, _o.chaResp, _o.bdbCreation, _o.bdbIndex, _o.procLevel, _o.product, _o.purpose, _o.quality, _o.bdbValidity, _o.birCreation, _o.birCreator, _o.birIndex, _o.patronFormat, _o.payload, _o.birValidity, _o.patronHdrVersion, _o.sbFormat, _o.cbeffVers, _o.bdb, _o.sb);
    }

    /**
     * @summary Getter that returns the default value for `encryptOpts`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_encryptOpts () { return false; }
    /**
     * @summary Getter that returns the default value for `integOpts`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_integOpts () { return false; }
    /**
     * @summary Getter that returns the default value for `subHeaderCount`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_subHeaderCount () { return 0; }
    /**
     * @summary Getter that returns the default value for `bdbLength`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_bdbLength () { return 0; }
    /**
     * @summary Getter that returns the default value for `bioType`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_bioType () { return BiometricType_noValueAvailable; }
    /**
     * @summary Getter that returns the default value for `bioSubtype`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_bioSubtype () { return BiometricSubtype_noValueAvailable; }
    /**
     * @summary Getter that returns the default value for `procLevel`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_procLevel () { return ProcessedLevel_noValueAvailable; }
    /**
     * @summary Getter that returns the default value for `purpose`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_purpose () { return Purpose_noValueAvailable; }
    /**
     * @summary Getter that returns the default value for `quality`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_quality () { return BiometricType_noValueAvailable; }
    /**
     * @summary Getter that returns the default value for `patronHdrVersion`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_patronHdrVersion () { return Version._from_object({ major: 1, minor: 0 }); }
    /**
     * @summary Getter that returns the default value for `cbeffVers`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_cbeffVers () { return Version._from_object({ major: 4, minor: 0 }); }        /**
         * @summary The enum used as the type of the component `procLevel`
         * @public
         * @static
         */

    public static _enum_for_procLevel: typeof _enum_for_ProcessedLevel = _enum_for_ProcessedLevel;        /**
         * @summary The enum used as the type of the component `purpose`
         * @public
         * @static
         */

    public static _enum_for_purpose: typeof _enum_for_Purpose = _enum_for_Purpose;
}

/**
 * @summary The Leading Root Component Types of AllElementsWithDefaultsBitOriented
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AllElementsWithDefaultsBitOriented: $.ComponentSpec[] = [
    new $.ComponentSpec("format", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("fieldPresence", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("encryptOpts", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("integOpts", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("subHeaderCount", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("bdbLength", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("bioType", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("bioSubtype", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("chaResp", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("bdbCreation", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("bdbIndex", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("procLevel", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("product", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("purpose", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("quality", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("bdbValidity", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("birCreation", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("birCreator", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("birIndex", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("patronFormat", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("payload", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("birValidity", false, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("patronHdrVersion", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("sbFormat", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("cbeffVers", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("bdb", false, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("sb", true, $.hasTag(_TagClass.context, 26))
];

/**
 * @summary The Trailing Root Component Types of AllElementsWithDefaultsBitOriented
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AllElementsWithDefaultsBitOriented: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AllElementsWithDefaultsBitOriented
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AllElementsWithDefaultsBitOriented: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AllElementsWithDefaultsBitOriented: $.ASN1Decoder<AllElementsWithDefaultsBitOriented> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AllElementsWithDefaultsBitOriented
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AllElementsWithDefaultsBitOriented (el: _Element): AllElementsWithDefaultsBitOriented {
    if (!_cached_decoder_for_AllElementsWithDefaultsBitOriented) { _cached_decoder_for_AllElementsWithDefaultsBitOriented = function (el: _Element): AllElementsWithDefaultsBitOriented {
    let format!: BDBFormat;
    let fieldPresence!: AllElementsWithDefaultsBitOriented_fieldPresence;
    let encryptOpts: OPTIONAL<EncryptionOptions> = AllElementsWithDefaultsBitOriented._default_value_for_encryptOpts;
    let integOpts: OPTIONAL<IntegrityOptions> = AllElementsWithDefaultsBitOriented._default_value_for_integOpts;
    let subHeaderCount: OPTIONAL<SubheaderCount> = AllElementsWithDefaultsBitOriented._default_value_for_subHeaderCount;
    let bdbLength: OPTIONAL<INTEGER> = AllElementsWithDefaultsBitOriented._default_value_for_bdbLength;
    let bioType: OPTIONAL<BiometricType> = AllElementsWithDefaultsBitOriented._default_value_for_bioType;
    let bioSubtype: OPTIONAL<BiometricSubtype> = AllElementsWithDefaultsBitOriented._default_value_for_bioSubtype;
    let chaResp: OPTIONAL<ChallengeResponse>;
    let bdbCreation: OPTIONAL<BDBCreationDate>;
    let bdbIndex: OPTIONAL<BDBIndex>;
    let procLevel: OPTIONAL<ProcessedLevel> = AllElementsWithDefaultsBitOriented._default_value_for_procLevel;
    let product: OPTIONAL<Product>;
    let purpose: OPTIONAL<Purpose> = AllElementsWithDefaultsBitOriented._default_value_for_purpose;
    let quality: OPTIONAL<Quality> = AllElementsWithDefaultsBitOriented._default_value_for_quality;
    let bdbValidity!: ValidityPeriod;
    let birCreation: OPTIONAL<BIRCreationDate>;
    let birCreator: OPTIONAL<Creator>;
    let birIndex: OPTIONAL<BIRIndex>;
    let patronFormat: OPTIONAL<PatronFormat>;
    let payload: OPTIONAL<Payload>;
    let birValidity!: ValidityPeriod;
    let patronHdrVersion: OPTIONAL<Version> = AllElementsWithDefaultsBitOriented._default_value_for_patronHdrVersion;
    let sbFormat: OPTIONAL<SBFormat>;
    let cbeffVers: OPTIONAL<Version> = AllElementsWithDefaultsBitOriented._default_value_for_cbeffVers;
    let bdb!: BiometricDataBlock;
    let sb: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "format": (_el: _Element): void => { format = _decode_BDBFormat(_el); },
        "fieldPresence": (_el: _Element): void => { fieldPresence = _decode_AllElementsWithDefaultsBitOriented_fieldPresence(_el); },
        "encryptOpts": (_el: _Element): void => { encryptOpts = _decode_EncryptionOptions(_el); },
        "integOpts": (_el: _Element): void => { integOpts = _decode_IntegrityOptions(_el); },
        "subHeaderCount": (_el: _Element): void => { subHeaderCount = _decode_SubheaderCount(_el); },
        "bdbLength": (_el: _Element): void => { bdbLength = $._decodeInteger(_el); },
        "bioType": (_el: _Element): void => { bioType = _decode_BiometricType(_el); },
        "bioSubtype": (_el: _Element): void => { bioSubtype = _decode_BiometricSubtype(_el); },
        "chaResp": (_el: _Element): void => { chaResp = _decode_ChallengeResponse(_el); },
        "bdbCreation": (_el: _Element): void => { bdbCreation = _decode_BDBCreationDate(_el); },
        "bdbIndex": (_el: _Element): void => { bdbIndex = _decode_BDBIndex(_el); },
        "procLevel": (_el: _Element): void => { procLevel = _decode_ProcessedLevel(_el); },
        "product": (_el: _Element): void => { product = _decode_Product(_el); },
        "purpose": (_el: _Element): void => { purpose = _decode_Purpose(_el); },
        "quality": (_el: _Element): void => { quality = _decode_Quality(_el); },
        "bdbValidity": (_el: _Element): void => { bdbValidity = _decode_ValidityPeriod(_el); },
        "birCreation": (_el: _Element): void => { birCreation = _decode_BIRCreationDate(_el); },
        "birCreator": (_el: _Element): void => { birCreator = _decode_Creator(_el); },
        "birIndex": (_el: _Element): void => { birIndex = _decode_BIRIndex(_el); },
        "patronFormat": (_el: _Element): void => { patronFormat = _decode_PatronFormat(_el); },
        "payload": (_el: _Element): void => { payload = _decode_Payload(_el); },
        "birValidity": (_el: _Element): void => { birValidity = _decode_ValidityPeriod(_el); },
        "patronHdrVersion": (_el: _Element): void => { patronHdrVersion = _decode_Version(_el); },
        "sbFormat": (_el: _Element): void => { sbFormat = _decode_SBFormat(_el); },
        "cbeffVers": (_el: _Element): void => { cbeffVers = _decode_Version(_el); },
        "bdb": (_el: _Element): void => { bdb = _decode_BiometricDataBlock(_el); },
        "sb": (_el: _Element): void => { sb = $._decodeOctetString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AllElementsWithDefaultsBitOriented,
        _extension_additions_list_spec_for_AllElementsWithDefaultsBitOriented,
        _root_component_type_list_2_spec_for_AllElementsWithDefaultsBitOriented,
        undefined,
    );
    return new AllElementsWithDefaultsBitOriented(
        format,
        fieldPresence,
        encryptOpts,
        integOpts,
        subHeaderCount,
        bdbLength,
        bioType,
        bioSubtype,
        chaResp,
        bdbCreation,
        bdbIndex,
        procLevel,
        product,
        purpose,
        quality,
        bdbValidity,
        birCreation,
        birCreator,
        birIndex,
        patronFormat,
        payload,
        birValidity,
        patronHdrVersion,
        sbFormat,
        cbeffVers,
        bdb,
        sb
    );
}; }
    return _cached_decoder_for_AllElementsWithDefaultsBitOriented(el);
}

let _cached_encoder_for_AllElementsWithDefaultsBitOriented: $.ASN1Encoder<AllElementsWithDefaultsBitOriented> | null = null;

/**
 * @summary Encodes a(n) AllElementsWithDefaultsBitOriented into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AllElementsWithDefaultsBitOriented, encoded as an ASN.1 Element.
 */
export
function _encode_AllElementsWithDefaultsBitOriented (value: AllElementsWithDefaultsBitOriented, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AllElementsWithDefaultsBitOriented) { _cached_encoder_for_AllElementsWithDefaultsBitOriented = function (value: AllElementsWithDefaultsBitOriented, elGetter: $.ASN1Encoder<AllElementsWithDefaultsBitOriented>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_BDBFormat, $.BER)(value.format, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AllElementsWithDefaultsBitOriented_fieldPresence, $.BER)(value.fieldPresence, $.BER));
    if (value.encryptOpts !== undefined && !$.deepEq(value.encryptOpts, AllElementsWithDefaultsBitOriented._default_value_for_encryptOpts)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 2, () => _encode_EncryptionOptions, $.BER)(value.encryptOpts, $.BER));
    }
    if (value.integOpts !== undefined && !$.deepEq(value.integOpts, AllElementsWithDefaultsBitOriented._default_value_for_integOpts)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 3, () => _encode_IntegrityOptions, $.BER)(value.integOpts, $.BER));
    }
    if (value.subHeaderCount !== undefined && !$.deepEq(value.subHeaderCount, AllElementsWithDefaultsBitOriented._default_value_for_subHeaderCount)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 4, () => _encode_SubheaderCount, $.BER)(value.subHeaderCount, $.BER));
    }
    if (value.bdbLength !== undefined && !$.deepEq(value.bdbLength, AllElementsWithDefaultsBitOriented._default_value_for_bdbLength)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.bdbLength, $.BER));
    }
    if (value.bioType !== undefined && !$.deepEq(value.bioType, AllElementsWithDefaultsBitOriented._default_value_for_bioType)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 6, () => _encode_BiometricType, $.BER)(value.bioType, $.BER));
    }
    if (value.bioSubtype !== undefined && !$.deepEq(value.bioSubtype, AllElementsWithDefaultsBitOriented._default_value_for_bioSubtype)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 7, () => _encode_BiometricSubtype, $.BER)(value.bioSubtype, $.BER));
    }
    if (value.chaResp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_ChallengeResponse, $.BER)(value.chaResp, $.BER));
    }
    if (value.bdbCreation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_BDBCreationDate, $.BER)(value.bdbCreation, $.BER));
    }
    if (value.bdbIndex !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_BDBIndex, $.BER)(value.bdbIndex, $.BER));
    }
    if (value.procLevel !== undefined && !$.deepEq(value.procLevel, AllElementsWithDefaultsBitOriented._default_value_for_procLevel)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 11, () => _encode_ProcessedLevel, $.BER)(value.procLevel, $.BER));
    }
    if (value.product !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_Product, $.BER)(value.product, $.BER));
    }
    if (value.purpose !== undefined && !$.deepEq(value.purpose, AllElementsWithDefaultsBitOriented._default_value_for_purpose)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 13, () => _encode_Purpose, $.BER)(value.purpose, $.BER));
    }
    if (value.quality !== undefined && !$.deepEq(value.quality, AllElementsWithDefaultsBitOriented._default_value_for_quality)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 14, () => _encode_Quality, $.BER)(value.quality, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 15, () => _encode_ValidityPeriod, $.BER)(value.bdbValidity, $.BER));
    if (value.birCreation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_BIRCreationDate, $.BER)(value.birCreation, $.BER));
    }
    if (value.birCreator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_Creator, $.BER)(value.birCreator, $.BER));
    }
    if (value.birIndex !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_BIRIndex, $.BER)(value.birIndex, $.BER));
    }
    if (value.patronFormat !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => _encode_PatronFormat, $.BER)(value.patronFormat, $.BER));
    }
    if (value.payload !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_Payload, $.BER)(value.payload, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 21, () => _encode_ValidityPeriod, $.BER)(value.birValidity, $.BER));
    if (value.patronHdrVersion !== undefined && !$.deepEq(value.patronHdrVersion, AllElementsWithDefaultsBitOriented._default_value_for_patronHdrVersion)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 22, () => _encode_Version, $.BER)(value.patronHdrVersion, $.BER));
    }
    if (value.sbFormat !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => _encode_SBFormat, $.BER)(value.sbFormat, $.BER));
    }
    if (value.cbeffVers !== undefined && !$.deepEq(value.cbeffVers, AllElementsWithDefaultsBitOriented._default_value_for_cbeffVers)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 24, () => _encode_Version, $.BER)(value.cbeffVers, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 25, () => _encode_BiometricDataBlock, $.BER)(value.bdb, $.BER));
    if (value.sb !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeOctetString, $.BER)(value.sb, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AllElementsWithDefaultsBitOriented(value, elGetter);
}


/* eslint-enable */
