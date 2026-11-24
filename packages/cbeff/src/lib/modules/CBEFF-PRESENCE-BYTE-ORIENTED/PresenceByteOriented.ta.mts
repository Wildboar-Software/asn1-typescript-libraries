/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertIntegerRange } from "../../constraints.mjs";
import { type BDBCreationDate, _decode_BDBCreationDate, _encode_BDBCreationDate } from "../CBEFF-DATA-ELEMENTS/BDBCreationDate.ta.mjs";
import { BDBFormat, _decode_BDBFormat, _encode_BDBFormat } from "../CBEFF-DATA-ELEMENTS/BDBFormat.ta.mjs";
import { type BDBValidityPeriod, _decode_BDBValidityPeriod, _encode_BDBValidityPeriod } from "../CBEFF-DATA-ELEMENTS/BDBValidityPeriod.ta.mjs";
import { type BiometricDataBlock, _decode_BiometricDataBlock, _encode_BiometricDataBlock } from "../CBEFF-DATA-ELEMENTS/BiometricDataBlock.ta.mjs";
import { type BiometricSubtype, BiometricSubtype_noValueAvailable, _decode_BiometricSubtype, _encode_BiometricSubtype } from "../CBEFF-DATA-ELEMENTS/BiometricSubtype.ta.mjs";
import { type BiometricType, BiometricType_noValueAvailable, _decode_BiometricType, _encode_BiometricType } from "../CBEFF-DATA-ELEMENTS/BiometricType.ta.mjs";
import { type BIRCreationDate, _decode_BIRCreationDate, _encode_BIRCreationDate } from "../CBEFF-DATA-ELEMENTS/BIRCreationDate.ta.mjs";
import { type BIRValidityPeriod, _decode_BIRValidityPeriod, _encode_BIRValidityPeriod } from "../CBEFF-DATA-ELEMENTS/BIRValidityPeriod.ta.mjs";
import { ProcessedLevel, ProcessedLevel_noValueAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_ProcessedLevel, _encode_ProcessedLevel, _enum_for_ProcessedLevel } from "../CBEFF-DATA-ELEMENTS/ProcessedLevel.ta.mjs";
import { type Product, _decode_Product, _encode_Product } from "../CBEFF-DATA-ELEMENTS/Product.ta.mjs";
import { Purpose, Purpose_noValueAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_Purpose, _encode_Purpose, _enum_for_Purpose } from "../CBEFF-DATA-ELEMENTS/Purpose.ta.mjs";
import { type Quality, _decode_Quality, _encode_Quality } from "../CBEFF-DATA-ELEMENTS/Quality.ta.mjs";
import { type SubheaderCount, _decode_SubheaderCount, _encode_SubheaderCount } from "../CBEFF-DATA-ELEMENTS/SubheaderCount.ta.mjs";
import { Version, _decode_Version, _encode_Version } from "../CBEFF-DATA-ELEMENTS/Version.ta.mjs";
import { PresenceByteOriented_fieldPresence, _decode_PresenceByteOriented_fieldPresence, _encode_PresenceByteOriented_fieldPresence } from "../CBEFF-PRESENCE-BYTE-ORIENTED/PresenceByteOriented-fieldPresence.ta.mjs";

/**
 * @summary PresenceByteOriented
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceByteOriented ::= SEQUENCE {
 *     -- This patron format contains all data elements but makes full use of default values to allow
 *     -- omission of fields. A bit map is present at the start of the encoding to determine which
 *     -- fields are present.
 *     format              BDBFormat,
 *     fieldPresence       SEQUENCE {
 *         bioType             BOOLEAN,
 *         bioSubtype          BOOLEAN,
 *         bdbCreation         BOOLEAN,
 *         procLevel           BOOLEAN,
 *         bdbProduct          BOOLEAN,
 *         bdbPurpose          BOOLEAN,
 *         bdbQuality          BOOLEAN,
 *         bdbValidity         BOOLEAN,
 *         birCreation         BOOLEAN,
 *         birValidity         BOOLEAN,
 *         patronHdrVersion    BOOLEAN,
 *         cbeffVers           BOOLEAN,
 *         subHeaderCount      BOOLEAN,
 *         bdbLength           BOOLEAN
 *     },
 *     bdbFormat           BDBFormat,
 *     bioType             BiometricType DEFAULT noValueAvailable,
 *     bioSubtype          BiometricSubtype DEFAULT noValueAvailable,
 *     bdbCreation         BDBCreationDate OPTIONAL,
 *     procLevel           ProcessedLevel DEFAULT noValueAvailable,
 *     bdbProduct          Product OPTIONAL,
 *     bdbPurpose          Purpose DEFAULT noValueAvailable,
 *     bdbQuality          Quality DEFAULT noValueAvailable,
 *     bdbValidity         BDBValidityPeriod OPTIONAL,
 *     birCreation         BIRCreationDate OPTIONAL,
 *     birValidity         BIRValidityPeriod OPTIONAL,
 *     -- Original typo read: patronHdrVersion    Version INTEGER (0..255) DEFAULT 1,
 *     patronHdrVersion    INTEGER (0..255) DEFAULT 1,
 *     -- Component names corrected to match Version (major, minor).
 *     cbeffVers           Version DEFAULT {major 4, minor 0},
 *     subHeaderCount      SubheaderCount DEFAULT 0,
 *     bdbLength           INTEGER (0..4294967295) DEFAULT 0,
 *     bdb                 BiometricDataBlock
 * }
 * ```
 * 
 * @class
 */
export
class PresenceByteOriented {
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
    readonly fieldPresence: PresenceByteOriented_fieldPresence;
    /**
     * @summary `bdbFormat`.
     * @public
     * @readonly
     */
    readonly bdbFormat: BDBFormat;
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
     * @summary `bdbCreation`.
     * @public
     * @readonly
     */
    readonly bdbCreation: OPTIONAL<BDBCreationDate>;
    /**
     * @summary `procLevel`.
     * @public
     * @readonly
     */
    readonly procLevel: OPTIONAL<ProcessedLevel>;
    /**
     * @summary `bdbProduct`.
     * @public
     * @readonly
     */
    readonly bdbProduct: OPTIONAL<Product>;
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
     * @summary `bdbValidity`.
     * @public
     * @readonly
     */
    readonly bdbValidity: OPTIONAL<BDBValidityPeriod>;
    /**
     * @summary `birCreation`.
     * @public
     * @readonly
     */
    readonly birCreation: OPTIONAL<BIRCreationDate>;
    /**
     * @summary `birValidity`.
     * @public
     * @readonly
     */
    readonly birValidity: OPTIONAL<BIRValidityPeriod>;
    /**
     * @summary `patronHdrVersion`.
     * @public
     * @readonly
     */
    readonly patronHdrVersion: OPTIONAL<INTEGER>;
    /**
     * @summary `cbeffVers`.
     * @public
     * @readonly
     */
    readonly cbeffVers: OPTIONAL<Version>;
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
     * @summary `bdb`.
     * @public
     * @readonly
     */
    readonly bdb: BiometricDataBlock;

    constructor (
        format: BDBFormat,
        fieldPresence: PresenceByteOriented_fieldPresence,
        bdbFormat: BDBFormat,
        bioType: OPTIONAL<BiometricType>,
        bioSubtype: OPTIONAL<BiometricSubtype>,
        bdbCreation: OPTIONAL<BDBCreationDate>,
        procLevel: OPTIONAL<ProcessedLevel>,
        bdbProduct: OPTIONAL<Product>,
        bdbPurpose: OPTIONAL<Purpose>,
        bdbQuality: OPTIONAL<Quality>,
        bdbValidity: OPTIONAL<BDBValidityPeriod>,
        birCreation: OPTIONAL<BIRCreationDate>,
        birValidity: OPTIONAL<BIRValidityPeriod>,
        patronHdrVersion: OPTIONAL<INTEGER>,
        cbeffVers: OPTIONAL<Version>,
        subHeaderCount: OPTIONAL<SubheaderCount>,
        bdbLength: OPTIONAL<INTEGER>,
        bdb: BiometricDataBlock
    ) {
        if (patronHdrVersion !== undefined) assertIntegerRange(patronHdrVersion, 0, 255, "PresenceByteOriented.patronHdrVersion");
        if (bdbLength !== undefined) assertIntegerRange(bdbLength, 0, 4294967295, "PresenceByteOriented.bdbLength");
        this.format = format;
        this.fieldPresence = fieldPresence;
        this.bdbFormat = bdbFormat;
        this.bioType = bioType;
        this.bioSubtype = bioSubtype;
        this.bdbCreation = bdbCreation;
        this.procLevel = procLevel;
        this.bdbProduct = bdbProduct;
        this.bdbPurpose = bdbPurpose;
        this.bdbQuality = bdbQuality;
        this.bdbValidity = bdbValidity;
        this.birCreation = birCreation;
        this.birValidity = birValidity;
        this.patronHdrVersion = patronHdrVersion;
        this.cbeffVers = cbeffVers;
        this.subHeaderCount = subHeaderCount;
        this.bdbLength = bdbLength;
        this.bdb = bdb;
    }

    /**
     * @summary Restructures an object into a PresenceByteOriented
     * @description
     * 
     * This takes an `object` and converts it to a `PresenceByteOriented`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PresenceByteOriented`.
     * @returns {PresenceByteOriented}
     */
    public static _from_object (_o: { [_K in keyof (PresenceByteOriented)]: (PresenceByteOriented)[_K] }): PresenceByteOriented {
        return new PresenceByteOriented(_o.format, _o.fieldPresence, _o.bdbFormat, _o.bioType, _o.bioSubtype, _o.bdbCreation, _o.procLevel, _o.bdbProduct, _o.bdbPurpose, _o.bdbQuality, _o.bdbValidity, _o.birCreation, _o.birValidity, _o.patronHdrVersion, _o.cbeffVers, _o.subHeaderCount, _o.bdbLength, _o.bdb);
    }

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
     * @summary Getter that returns the default value for `bdbPurpose`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_bdbPurpose () { return Purpose_noValueAvailable; }
    /**
     * @summary Getter that returns the default value for `bdbQuality`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_bdbQuality () { return BiometricType_noValueAvailable; }
    /**
     * @summary Getter that returns the default value for `patronHdrVersion`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_patronHdrVersion () { return 1; }
    /**
     * @summary Getter that returns the default value for `cbeffVers`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_cbeffVers () { return Version._from_object({ major: 4, minor: 0 }); }
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
         * @summary The enum used as the type of the component `procLevel`
         * @public
         * @static
         */

    public static _enum_for_procLevel: typeof _enum_for_ProcessedLevel = _enum_for_ProcessedLevel;
    /**
         * @summary The enum used as the type of the component `bdbPurpose`
         * @public
         * @static
         */

    public static _enum_for_bdbPurpose: typeof _enum_for_Purpose = _enum_for_Purpose;
}

/**
 * @summary The Leading Root Component Types of PresenceByteOriented
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PresenceByteOriented: $.ComponentSpec[] = [
    new $.ComponentSpec("format", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("fieldPresence", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("bdbFormat", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("bioType", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("bioSubtype", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("bdbCreation", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("procLevel", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("bdbProduct", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("bdbPurpose", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("bdbQuality", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("bdbValidity", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("birCreation", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("birValidity", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("patronHdrVersion", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("cbeffVers", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("subHeaderCount", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("bdbLength", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("bdb", false, $.hasTag(_TagClass.context, 17))
];

/**
 * @summary The Trailing Root Component Types of PresenceByteOriented
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PresenceByteOriented: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PresenceByteOriented
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PresenceByteOriented: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PresenceByteOriented: $.ASN1Decoder<PresenceByteOriented> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PresenceByteOriented
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PresenceByteOriented (el: _Element): PresenceByteOriented {
    if (!_cached_decoder_for_PresenceByteOriented) { _cached_decoder_for_PresenceByteOriented = function (el: _Element): PresenceByteOriented {
    let format!: BDBFormat;
    let fieldPresence!: PresenceByteOriented_fieldPresence;
    let bdbFormat!: BDBFormat;
    let bioType: OPTIONAL<BiometricType> = PresenceByteOriented._default_value_for_bioType;
    let bioSubtype: OPTIONAL<BiometricSubtype> = PresenceByteOriented._default_value_for_bioSubtype;
    let bdbCreation: OPTIONAL<BDBCreationDate>;
    let procLevel: OPTIONAL<ProcessedLevel> = PresenceByteOriented._default_value_for_procLevel;
    let bdbProduct: OPTIONAL<Product>;
    let bdbPurpose: OPTIONAL<Purpose> = PresenceByteOriented._default_value_for_bdbPurpose;
    let bdbQuality: OPTIONAL<Quality> = PresenceByteOriented._default_value_for_bdbQuality;
    let bdbValidity: OPTIONAL<BDBValidityPeriod>;
    let birCreation: OPTIONAL<BIRCreationDate>;
    let birValidity: OPTIONAL<BIRValidityPeriod>;
    let patronHdrVersion: OPTIONAL<INTEGER> = PresenceByteOriented._default_value_for_patronHdrVersion;
    let cbeffVers: OPTIONAL<Version> = PresenceByteOriented._default_value_for_cbeffVers;
    let subHeaderCount: OPTIONAL<SubheaderCount> = PresenceByteOriented._default_value_for_subHeaderCount;
    let bdbLength: OPTIONAL<INTEGER> = PresenceByteOriented._default_value_for_bdbLength;
    let bdb!: BiometricDataBlock;
    const callbacks: $.DecodingMap = {
        "format": (_el: _Element): void => { format = _decode_BDBFormat(_el); },
        "fieldPresence": (_el: _Element): void => { fieldPresence = _decode_PresenceByteOriented_fieldPresence(_el); },
        "bdbFormat": (_el: _Element): void => { bdbFormat = _decode_BDBFormat(_el); },
        "bioType": (_el: _Element): void => { bioType = _decode_BiometricType(_el); },
        "bioSubtype": (_el: _Element): void => { bioSubtype = _decode_BiometricSubtype(_el); },
        "bdbCreation": (_el: _Element): void => { bdbCreation = _decode_BDBCreationDate(_el); },
        "procLevel": (_el: _Element): void => { procLevel = _decode_ProcessedLevel(_el); },
        "bdbProduct": (_el: _Element): void => { bdbProduct = _decode_Product(_el); },
        "bdbPurpose": (_el: _Element): void => { bdbPurpose = _decode_Purpose(_el); },
        "bdbQuality": (_el: _Element): void => { bdbQuality = _decode_Quality(_el); },
        "bdbValidity": (_el: _Element): void => { bdbValidity = _decode_BDBValidityPeriod(_el); },
        "birCreation": (_el: _Element): void => { birCreation = _decode_BIRCreationDate(_el); },
        "birValidity": (_el: _Element): void => { birValidity = _decode_BIRValidityPeriod(_el); },
        "patronHdrVersion": (_el: _Element): void => { patronHdrVersion = $._decodeInteger(_el); },
        "cbeffVers": (_el: _Element): void => { cbeffVers = _decode_Version(_el); },
        "subHeaderCount": (_el: _Element): void => { subHeaderCount = _decode_SubheaderCount(_el); },
        "bdbLength": (_el: _Element): void => { bdbLength = $._decodeInteger(_el); },
        "bdb": (_el: _Element): void => { bdb = _decode_BiometricDataBlock(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PresenceByteOriented,
        _extension_additions_list_spec_for_PresenceByteOriented,
        _root_component_type_list_2_spec_for_PresenceByteOriented,
        undefined,
    );
    return new PresenceByteOriented(
        format,
        fieldPresence,
        bdbFormat,
        bioType,
        bioSubtype,
        bdbCreation,
        procLevel,
        bdbProduct,
        bdbPurpose,
        bdbQuality,
        bdbValidity,
        birCreation,
        birValidity,
        patronHdrVersion,
        cbeffVers,
        subHeaderCount,
        bdbLength,
        bdb
    );
}; }
    return _cached_decoder_for_PresenceByteOriented(el);
}

let _cached_encoder_for_PresenceByteOriented: $.ASN1Encoder<PresenceByteOriented> | null = null;

/**
 * @summary Encodes a(n) PresenceByteOriented into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresenceByteOriented, encoded as an ASN.1 Element.
 */
export
function _encode_PresenceByteOriented (value: PresenceByteOriented, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PresenceByteOriented) { _cached_encoder_for_PresenceByteOriented = function (value: PresenceByteOriented, elGetter: $.ASN1Encoder<PresenceByteOriented>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_BDBFormat, $.BER)(value.format, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PresenceByteOriented_fieldPresence, $.BER)(value.fieldPresence, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_BDBFormat, $.BER)(value.bdbFormat, $.BER));
    if (value.bioType !== undefined && !$.deepEq(value.bioType, PresenceByteOriented._default_value_for_bioType)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 3, () => _encode_BiometricType, $.BER)(value.bioType, $.BER));
    }
    if (value.bioSubtype !== undefined && !$.deepEq(value.bioSubtype, PresenceByteOriented._default_value_for_bioSubtype)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 4, () => _encode_BiometricSubtype, $.BER)(value.bioSubtype, $.BER));
    }
    if (value.bdbCreation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_BDBCreationDate, $.BER)(value.bdbCreation, $.BER));
    }
    if (value.procLevel !== undefined && !$.deepEq(value.procLevel, PresenceByteOriented._default_value_for_procLevel)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 6, () => _encode_ProcessedLevel, $.BER)(value.procLevel, $.BER));
    }
    if (value.bdbProduct !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_Product, $.BER)(value.bdbProduct, $.BER));
    }
    if (value.bdbPurpose !== undefined && !$.deepEq(value.bdbPurpose, PresenceByteOriented._default_value_for_bdbPurpose)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 8, () => _encode_Purpose, $.BER)(value.bdbPurpose, $.BER));
    }
    if (value.bdbQuality !== undefined && !$.deepEq(value.bdbQuality, PresenceByteOriented._default_value_for_bdbQuality)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 9, () => _encode_Quality, $.BER)(value.bdbQuality, $.BER));
    }
    if (value.bdbValidity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_BDBValidityPeriod, $.BER)(value.bdbValidity, $.BER));
    }
    if (value.birCreation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_BIRCreationDate, $.BER)(value.birCreation, $.BER));
    }
    if (value.birValidity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_BIRValidityPeriod, $.BER)(value.birValidity, $.BER));
    }
    if (value.patronHdrVersion !== undefined && !$.deepEq(value.patronHdrVersion, PresenceByteOriented._default_value_for_patronHdrVersion)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER)(value.patronHdrVersion, $.BER));
    }
    if (value.cbeffVers !== undefined && !$.deepEq(value.cbeffVers, PresenceByteOriented._default_value_for_cbeffVers)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 14, () => _encode_Version, $.BER)(value.cbeffVers, $.BER));
    }
    if (value.subHeaderCount !== undefined && !$.deepEq(value.subHeaderCount, PresenceByteOriented._default_value_for_subHeaderCount)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 15, () => _encode_SubheaderCount, $.BER)(value.subHeaderCount, $.BER));
    }
    if (value.bdbLength !== undefined && !$.deepEq(value.bdbLength, PresenceByteOriented._default_value_for_bdbLength)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 16, () => $._encodeInteger, $.BER)(value.bdbLength, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 17, () => _encode_BiometricDataBlock, $.BER)(value.bdb, $.BER));
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PresenceByteOriented(value, elGetter);
}

/* eslint-enable */
