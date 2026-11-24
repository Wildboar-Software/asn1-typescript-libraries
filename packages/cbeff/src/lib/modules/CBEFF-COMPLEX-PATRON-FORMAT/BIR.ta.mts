/* eslint-disable */
import {
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BIR_bdbFormat, _decode_BIR_bdbFormat, _encode_BIR_bdbFormat } from "../CBEFF-COMPLEX-PATRON-FORMAT/BIR-bdbFormat.ta.mjs";
import { BIR_children_child, _decode_BIR_children_child, _encode_BIR_children_child } from "../CBEFF-COMPLEX-PATRON-FORMAT/BIR-children-child.ta.mjs";
import { BIR_fieldPresence, _decode_BIR_fieldPresence, _encode_BIR_fieldPresence } from "../CBEFF-COMPLEX-PATRON-FORMAT/BIR-fieldPresence.ta.mjs";
import { BIR_sbFormat, _decode_BIR_sbFormat, _encode_BIR_sbFormat } from "../CBEFF-COMPLEX-PATRON-FORMAT/BIR-sbFormat.ta.mjs";
import { BiometricSubtype, _decode_BiometricSubtype, _encode_BiometricSubtype } from "../CBEFF-DATA-ELEMENTS/BiometricSubtype.ta.mjs";
import { BiometricType, _decode_BiometricType, _encode_BiometricType } from "../CBEFF-DATA-ELEMENTS/BiometricType.ta.mjs";
import { Product, _decode_Product, _encode_Product } from "../CBEFF-DATA-ELEMENTS/Product.ta.mjs";


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
 *     fieldPresence SEQUENCE {
 *         bdbFormat               BOOLEAN,
 *         bdbEncryption           BOOLEAN,
 *         bdbBiometricType        BOOLEAN,
 *         bdbBiometricSubtype     BOOLEAN,
 *         bdbChallengeResponse    BOOLEAN,
 *         bdbCreationDate         BOOLEAN,
 *         bdbIndex                BOOLEAN,
 *         bdbProcessedLevel       BOOLEAN,
 *         bdbProduct              BOOLEAN,
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
 *     bdbFormat               SEQUENCE {
 *         bdbFormatOwner  INTEGER (0..65535),
 *         bdbFormatType   INTEGER (0..65535)
 *     } OPTIONAL,
 *     bdbEncryption           INTEGER (0..255) OPTIONAL,
 *     birIntegrity            INTEGER (0..255),
 *     bdbBiometricType        BiometricType DEFAULT noValueAvailable,
 *     bdbBiometricSubtype     BiometricSubtype DEFAULT noValueAvailable,
 *     bdbChallengeResponse    OCTET STRING (SIZE(0..65535)) OPTIONAL,
 *     bdbCreationDate         OCTET STRING (SIZE(8..15)) OPTIONAL,
 *     bdbIndex                OCTET STRING (SIZE(0..65535)) OPTIONAL,
 *     bdbProcessedLevel       INTEGER (0..255) OPTIONAL,
 *     bdbProduct              Product OPTIONAL,
 *     bdbPurpose              INTEGER (0..255) OPTIONAL,
 *     bdbQuality              INTEGER (0..255) OPTIONAL,
 *     bdbValidityPeriod       OCTET STRING (SIZE(15..31)) OPTIONAL,
 *     birCreationDate         OCTET STRING (SIZE(8..15)) OPTIONAL,
 *     birCreator              OCTET STRING (SIZE(0..65535)) OPTIONAL,
 *     birIndex                OCTET STRING (SIZE(0..65535)) OPTIONAL,
 *     birPayload              OCTET STRING (SIZE(0..65535)) OPTIONAL,
 *     birValidityPeriod       OCTET STRING (SIZE(15..31)) OPTIONAL,
 *     sbFormat                SEQUENCE {
 *         sbFormatOwner   INTEGER (0..65535),
 *         sbFormatType    INTEGER (0..65535)
 *     } OPTIONAL,
 *     bdb                     OCTET STRING (SIZE(0..4294967295)) OPTIONAL,
 *     children                SEQUENCE (SIZE(0..255)) OF child SEQUENCE {
 *         childBirPatronFormat    SEQUENCE {
 *             childBirPatronFormatOwner   INTEGER (0..65535),
 *             childBirPatronFormatType    INTEGER (0..65535)
 *         },
 *         childBir                OCTET STRING (SIZE(0..4294967295))
 *     },
 *     sb                      OCTET STRING (SIZE(0..4294967295)) OPTIONAL
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
    readonly bdbFormat: OPTIONAL<BIR_bdbFormat>;
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
    readonly bdbChallengeResponse: OPTIONAL<OCTET_STRING>;
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
    readonly bdbIndex: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `bdbProcessedLevel`.
     * @public
     * @readonly
     */
    readonly bdbProcessedLevel: OPTIONAL<INTEGER>;
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
    readonly bdbPurpose: OPTIONAL<INTEGER>;
    /**
     * @summary `bdbQuality`.
     * @public
     * @readonly
     */
    readonly bdbQuality: OPTIONAL<INTEGER>;
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
    readonly birCreator: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `birIndex`.
     * @public
     * @readonly
     */
    readonly birIndex: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `birPayload`.
     * @public
     * @readonly
     */
    readonly birPayload: OPTIONAL<OCTET_STRING>;
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
    readonly sbFormat: OPTIONAL<BIR_sbFormat>;
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
        bdbFormat: OPTIONAL<BIR_bdbFormat>,
        bdbEncryption: OPTIONAL<INTEGER>,
        birIntegrity: INTEGER,
        bdbBiometricType: OPTIONAL<BiometricType>,
        bdbBiometricSubtype: OPTIONAL<BiometricSubtype>,
        bdbChallengeResponse: OPTIONAL<OCTET_STRING>,
        bdbCreationDate: OPTIONAL<OCTET_STRING>,
        bdbIndex: OPTIONAL<OCTET_STRING>,
        bdbProcessedLevel: OPTIONAL<INTEGER>,
        bdbProduct: OPTIONAL<Product>,
        bdbPurpose: OPTIONAL<INTEGER>,
        bdbQuality: OPTIONAL<INTEGER>,
        bdbValidityPeriod: OPTIONAL<OCTET_STRING>,
        birCreationDate: OPTIONAL<OCTET_STRING>,
        birCreator: OPTIONAL<OCTET_STRING>,
        birIndex: OPTIONAL<OCTET_STRING>,
        birPayload: OPTIONAL<OCTET_STRING>,
        birValidityPeriod: OPTIONAL<OCTET_STRING>,
        sbFormat: OPTIONAL<BIR_sbFormat>,
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
        return new BIR(_o.patronHeaderVersion, _o.cbeffVersion, _o.fieldPresence, _o.bdbFormat, _o.bdbEncryption, _o.birIntegrity, _o.bdbBiometricType, _o.bdbBiometricSubtype, _o.bdbChallengeResponse, _o.bdbCreationDate, _o.bdbIndex, _o.bdbProcessedLevel, _o.bdbProduct, _o.bdbPurpose, _o.bdbQuality, _o.bdbValidityPeriod, _o.birCreationDate, _o.birCreator, _o.birIndex, _o.birPayload, _o.birValidityPeriod, _o.sbFormat, _o.bdb, _o.children, _o.sb);
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
    public static get _default_value_for_bdbBiometricSubtype () { return noValueAvailable; }
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
    new $.ComponentSpec("bdbPurpose", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("bdbQuality", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("bdbValidityPeriod", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("birCreationDate", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("birCreator", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("birIndex", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("birPayload", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("birValidityPeriod", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("sbFormat", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("bdb", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("children", false, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("sb", true, $.hasTag(_TagClass.context, 24))
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
    let bdbFormat: OPTIONAL<BIR_bdbFormat>;
    let bdbEncryption: OPTIONAL<INTEGER>;
    let birIntegrity!: INTEGER;
    let bdbBiometricType: OPTIONAL<BiometricType> = BIR._default_value_for_bdbBiometricType;
    let bdbBiometricSubtype: OPTIONAL<BiometricSubtype> = BIR._default_value_for_bdbBiometricSubtype;
    let bdbChallengeResponse: OPTIONAL<OCTET_STRING>;
    let bdbCreationDate: OPTIONAL<OCTET_STRING>;
    let bdbIndex: OPTIONAL<OCTET_STRING>;
    let bdbProcessedLevel: OPTIONAL<INTEGER>;
    let bdbProduct: OPTIONAL<Product>;
    let bdbPurpose: OPTIONAL<INTEGER>;
    let bdbQuality: OPTIONAL<INTEGER>;
    let bdbValidityPeriod: OPTIONAL<OCTET_STRING>;
    let birCreationDate: OPTIONAL<OCTET_STRING>;
    let birCreator: OPTIONAL<OCTET_STRING>;
    let birIndex: OPTIONAL<OCTET_STRING>;
    let birPayload: OPTIONAL<OCTET_STRING>;
    let birValidityPeriod: OPTIONAL<OCTET_STRING>;
    let sbFormat: OPTIONAL<BIR_sbFormat>;
    let bdb: OPTIONAL<OCTET_STRING>;
    let children!: BIR_children_child[];
    let sb: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "patronHeaderVersion": (_el: _Element): void => { patronHeaderVersion = $._decodeInteger(_el); },
        "cbeffVersion": (_el: _Element): void => { cbeffVersion = $._decodeInteger(_el); },
        "fieldPresence": (_el: _Element): void => { fieldPresence = _decode_BIR_fieldPresence(_el); },
        "bdbFormat": (_el: _Element): void => { bdbFormat = _decode_BIR_bdbFormat(_el); },
        "bdbEncryption": (_el: _Element): void => { bdbEncryption = $._decodeInteger(_el); },
        "birIntegrity": (_el: _Element): void => { birIntegrity = $._decodeInteger(_el); },
        "bdbBiometricType": (_el: _Element): void => { bdbBiometricType = _decode_BiometricType(_el); },
        "bdbBiometricSubtype": (_el: _Element): void => { bdbBiometricSubtype = _decode_BiometricSubtype(_el); },
        "bdbChallengeResponse": (_el: _Element): void => { bdbChallengeResponse = $._decodeOctetString(_el); },
        "bdbCreationDate": (_el: _Element): void => { bdbCreationDate = $._decodeOctetString(_el); },
        "bdbIndex": (_el: _Element): void => { bdbIndex = $._decodeOctetString(_el); },
        "bdbProcessedLevel": (_el: _Element): void => { bdbProcessedLevel = $._decodeInteger(_el); },
        "bdbProduct": (_el: _Element): void => { bdbProduct = _decode_Product(_el); },
        "bdbPurpose": (_el: _Element): void => { bdbPurpose = $._decodeInteger(_el); },
        "bdbQuality": (_el: _Element): void => { bdbQuality = $._decodeInteger(_el); },
        "bdbValidityPeriod": (_el: _Element): void => { bdbValidityPeriod = $._decodeOctetString(_el); },
        "birCreationDate": (_el: _Element): void => { birCreationDate = $._decodeOctetString(_el); },
        "birCreator": (_el: _Element): void => { birCreator = $._decodeOctetString(_el); },
        "birIndex": (_el: _Element): void => { birIndex = $._decodeOctetString(_el); },
        "birPayload": (_el: _Element): void => { birPayload = $._decodeOctetString(_el); },
        "birValidityPeriod": (_el: _Element): void => { birValidityPeriod = $._decodeOctetString(_el); },
        "sbFormat": (_el: _Element): void => { sbFormat = _decode_BIR_sbFormat(_el); },
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
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_BIR_bdbFormat, $.BER)(value.bdbFormat, $.BER));
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
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.bdbChallengeResponse, $.BER));
    }
    if (value.bdbCreationDate !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.bdbCreationDate, $.BER));
    }
    if (value.bdbIndex !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.bdbIndex, $.BER));
    }
    if (value.bdbProcessedLevel !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.bdbProcessedLevel, $.BER));
    }
    if (value.bdbProduct !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_Product, $.BER)(value.bdbProduct, $.BER));
    }
    if (value.bdbPurpose !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER)(value.bdbPurpose, $.BER));
    }
    if (value.bdbQuality !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER)(value.bdbQuality, $.BER));
    }
    if (value.bdbValidityPeriod !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeOctetString, $.BER)(value.bdbValidityPeriod, $.BER));
    }
    if (value.birCreationDate !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.birCreationDate, $.BER));
    }
    if (value.birCreator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeOctetString, $.BER)(value.birCreator, $.BER));
    }
    if (value.birIndex !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeOctetString, $.BER)(value.birIndex, $.BER));
    }
    if (value.birPayload !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeOctetString, $.BER)(value.birPayload, $.BER));
    }
    if (value.birValidityPeriod !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.birValidityPeriod, $.BER));
    }
    if (value.sbFormat !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_BIR_sbFormat, $.BER)(value.sbFormat, $.BER));
    }
    if (value.bdb !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeOctetString, $.BER)(value.bdb, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 23, () => $._encodeSequenceOf<BIR_children_child>(() => _encode_BIR_children_child, $.BER), $.BER)(value.children, $.BER));
    if (value.sb !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeOctetString, $.BER)(value.sb, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_BIR(value, elGetter);
}


/* eslint-enable */
