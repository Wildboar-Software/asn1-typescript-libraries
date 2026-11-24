/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BIR_fieldPresence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BIR-fieldPresence ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class BIR_fieldPresence {
    /**
     * @summary `bdbFormat`.
     * @public
     * @readonly
     */
    readonly bdbFormat: BOOLEAN;
    /**
     * @summary `bdbEncryption`.
     * @public
     * @readonly
     */
    readonly bdbEncryption: BOOLEAN;
    /**
     * @summary `bdbBiometricType`.
     * @public
     * @readonly
     */
    readonly bdbBiometricType: BOOLEAN;
    /**
     * @summary `bdbBiometricSubtype`.
     * @public
     * @readonly
     */
    readonly bdbBiometricSubtype: BOOLEAN;
    /**
     * @summary `bdbChallengeResponse`.
     * @public
     * @readonly
     */
    readonly bdbChallengeResponse: BOOLEAN;
    /**
     * @summary `bdbCreationDate`.
     * @public
     * @readonly
     */
    readonly bdbCreationDate: BOOLEAN;
    /**
     * @summary `bdbIndex`.
     * @public
     * @readonly
     */
    readonly bdbIndex: BOOLEAN;
    /**
     * @summary `bdbProcessedLevel`.
     * @public
     * @readonly
     */
    readonly bdbProcessedLevel: BOOLEAN;
    /**
     * @summary `bdbProduct`.
     * @public
     * @readonly
     */
    readonly bdbProduct: BOOLEAN;
    /**
     * @summary `bdbPurpose`.
     * @public
     * @readonly
     */
    readonly bdbPurpose: BOOLEAN;
    /**
     * @summary `bdbQuality`.
     * @public
     * @readonly
     */
    readonly bdbQuality: BOOLEAN;
    /**
     * @summary `bdbValidityPeriod`.
     * @public
     * @readonly
     */
    readonly bdbValidityPeriod: BOOLEAN;
    /**
     * @summary `birCreationDate`.
     * @public
     * @readonly
     */
    readonly birCreationDate: BOOLEAN;
    /**
     * @summary `birCreator`.
     * @public
     * @readonly
     */
    readonly birCreator: BOOLEAN;
    /**
     * @summary `birIndex`.
     * @public
     * @readonly
     */
    readonly birIndex: BOOLEAN;
    /**
     * @summary `birValidityPeriod`.
     * @public
     * @readonly
     */
    readonly birValidityPeriod: BOOLEAN;
    /**
     * @summary `sbFormat`.
     * @public
     * @readonly
     */
    readonly sbFormat: BOOLEAN;
    /**
     * @summary `bdb`.
     * @public
     * @readonly
     */
    readonly bdb: BOOLEAN;
    /**
     * @summary `children`.
     * @public
     * @readonly
     */
    readonly children: BOOLEAN;
    /**
     * @summary `sb`.
     * @public
     * @readonly
     */
    readonly sb: BOOLEAN;

    constructor (
        bdbFormat: BOOLEAN,
        bdbEncryption: BOOLEAN,
        bdbBiometricType: BOOLEAN,
        bdbBiometricSubtype: BOOLEAN,
        bdbChallengeResponse: BOOLEAN,
        bdbCreationDate: BOOLEAN,
        bdbIndex: BOOLEAN,
        bdbProcessedLevel: BOOLEAN,
        bdbProduct: BOOLEAN,
        bdbPurpose: BOOLEAN,
        bdbQuality: BOOLEAN,
        bdbValidityPeriod: BOOLEAN,
        birCreationDate: BOOLEAN,
        birCreator: BOOLEAN,
        birIndex: BOOLEAN,
        birValidityPeriod: BOOLEAN,
        sbFormat: BOOLEAN,
        bdb: BOOLEAN,
        children: BOOLEAN,
        sb: BOOLEAN
    ) {
        this.bdbFormat = bdbFormat;
        this.bdbEncryption = bdbEncryption;
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
        this.birValidityPeriod = birValidityPeriod;
        this.sbFormat = sbFormat;
        this.bdb = bdb;
        this.children = children;
        this.sb = sb;
    }

    /**
     * @summary Restructures an object into a BIR_fieldPresence
     * @description
     * 
     * This takes an `object` and converts it to a `BIR_fieldPresence`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BIR_fieldPresence`.
     * @returns {BIR_fieldPresence}
     */
    public static _from_object (_o: { [_K in keyof (BIR_fieldPresence)]: (BIR_fieldPresence)[_K] }): BIR_fieldPresence {
        return new BIR_fieldPresence(_o.bdbFormat, _o.bdbEncryption, _o.bdbBiometricType, _o.bdbBiometricSubtype, _o.bdbChallengeResponse, _o.bdbCreationDate, _o.bdbIndex, _o.bdbProcessedLevel, _o.bdbProduct, _o.bdbPurpose, _o.bdbQuality, _o.bdbValidityPeriod, _o.birCreationDate, _o.birCreator, _o.birIndex, _o.birValidityPeriod, _o.sbFormat, _o.bdb, _o.children, _o.sb);
    }


}

/**
 * @summary The Leading Root Component Types of BIR_fieldPresence
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BIR_fieldPresence: $.ComponentSpec[] = [
    new $.ComponentSpec("bdbFormat", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("bdbEncryption", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("bdbBiometricType", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("bdbBiometricSubtype", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("bdbChallengeResponse", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("bdbCreationDate", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("bdbIndex", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("bdbProcessedLevel", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("bdbProduct", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("bdbPurpose", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("bdbQuality", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("bdbValidityPeriod", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("birCreationDate", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("birCreator", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("birIndex", false, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("birValidityPeriod", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("sbFormat", false, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("bdb", false, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("children", false, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("sb", false, $.hasTag(_TagClass.context, 19))
];

/**
 * @summary The Trailing Root Component Types of BIR_fieldPresence
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BIR_fieldPresence: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BIR_fieldPresence
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BIR_fieldPresence: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BIR_fieldPresence: $.ASN1Decoder<BIR_fieldPresence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BIR_fieldPresence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BIR_fieldPresence (el: _Element): BIR_fieldPresence {
    if (!_cached_decoder_for_BIR_fieldPresence) { _cached_decoder_for_BIR_fieldPresence = function (el: _Element): BIR_fieldPresence {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 20) {
        throw new _ConstructionError("BIR-fieldPresence contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "bdbFormat";
    sequence[1].name = "bdbEncryption";
    sequence[2].name = "bdbBiometricType";
    sequence[3].name = "bdbBiometricSubtype";
    sequence[4].name = "bdbChallengeResponse";
    sequence[5].name = "bdbCreationDate";
    sequence[6].name = "bdbIndex";
    sequence[7].name = "bdbProcessedLevel";
    sequence[8].name = "bdbProduct";
    sequence[9].name = "bdbPurpose";
    sequence[10].name = "bdbQuality";
    sequence[11].name = "bdbValidityPeriod";
    sequence[12].name = "birCreationDate";
    sequence[13].name = "birCreator";
    sequence[14].name = "birIndex";
    sequence[15].name = "birValidityPeriod";
    sequence[16].name = "sbFormat";
    sequence[17].name = "bdb";
    sequence[18].name = "children";
    sequence[19].name = "sb";
    const bdbFormat: BOOLEAN = $._decodeBoolean(sequence[0]);
    const bdbEncryption: BOOLEAN = $._decodeBoolean(sequence[1]);
    const bdbBiometricType: BOOLEAN = $._decodeBoolean(sequence[2]);
    const bdbBiometricSubtype: BOOLEAN = $._decodeBoolean(sequence[3]);
    const bdbChallengeResponse: BOOLEAN = $._decodeBoolean(sequence[4]);
    const bdbCreationDate: BOOLEAN = $._decodeBoolean(sequence[5]);
    const bdbIndex: BOOLEAN = $._decodeBoolean(sequence[6]);
    const bdbProcessedLevel: BOOLEAN = $._decodeBoolean(sequence[7]);
    const bdbProduct: BOOLEAN = $._decodeBoolean(sequence[8]);
    const bdbPurpose: BOOLEAN = $._decodeBoolean(sequence[9]);
    const bdbQuality: BOOLEAN = $._decodeBoolean(sequence[10]);
    const bdbValidityPeriod: BOOLEAN = $._decodeBoolean(sequence[11]);
    const birCreationDate: BOOLEAN = $._decodeBoolean(sequence[12]);
    const birCreator: BOOLEAN = $._decodeBoolean(sequence[13]);
    const birIndex: BOOLEAN = $._decodeBoolean(sequence[14]);
    const birValidityPeriod: BOOLEAN = $._decodeBoolean(sequence[15]);
    const sbFormat: BOOLEAN = $._decodeBoolean(sequence[16]);
    const bdb: BOOLEAN = $._decodeBoolean(sequence[17]);
    const children: BOOLEAN = $._decodeBoolean(sequence[18]);
    const sb: BOOLEAN = $._decodeBoolean(sequence[19]);
    return new BIR_fieldPresence(
        bdbFormat,
        bdbEncryption,
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
        birValidityPeriod,
        sbFormat,
        bdb,
        children,
        sb,

    );
}; }
    return _cached_decoder_for_BIR_fieldPresence(el);
}

let _cached_encoder_for_BIR_fieldPresence: $.ASN1Encoder<BIR_fieldPresence> | null = null;

/**
 * @summary Encodes a(n) BIR_fieldPresence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BIR_fieldPresence, encoded as an ASN.1 Element.
 */
export
function _encode_BIR_fieldPresence (value: BIR_fieldPresence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BIR_fieldPresence) { _cached_encoder_for_BIR_fieldPresence = function (value: BIR_fieldPresence, elGetter: $.ASN1Encoder<BIR_fieldPresence>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.bdbFormat, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.bdbEncryption, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.bdbBiometricType, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.bdbBiometricSubtype, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.bdbChallengeResponse, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.bdbCreationDate, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.bdbIndex, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.bdbProcessedLevel, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeBoolean, $.BER)(value.bdbProduct, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeBoolean, $.BER)(value.bdbPurpose, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeBoolean, $.BER)(value.bdbQuality, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeBoolean, $.BER)(value.bdbValidityPeriod, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 12, () => $._encodeBoolean, $.BER)(value.birCreationDate, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 13, () => $._encodeBoolean, $.BER)(value.birCreator, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 14, () => $._encodeBoolean, $.BER)(value.birIndex, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 15, () => $._encodeBoolean, $.BER)(value.birValidityPeriod, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 16, () => $._encodeBoolean, $.BER)(value.sbFormat, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 17, () => $._encodeBoolean, $.BER)(value.bdb, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 18, () => $._encodeBoolean, $.BER)(value.children, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 19, () => $._encodeBoolean, $.BER)(value.sb, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_BIR_fieldPresence(value, elGetter);
}


/* eslint-enable */
