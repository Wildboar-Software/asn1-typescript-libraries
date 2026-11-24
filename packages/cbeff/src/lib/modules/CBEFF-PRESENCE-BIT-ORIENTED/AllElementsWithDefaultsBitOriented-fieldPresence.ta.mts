/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AllElementsWithDefaultsBitOriented_fieldPresence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AllElementsWithDefaultsBitOriented-fieldPresence ::= SEQUENCE {
 *     encryptOpts         BOOLEAN,
 *     integOpts           BOOLEAN,
 *     subHeaderCount      BOOLEAN,
 *     bdbLength           BOOLEAN,
 *     bioType             BOOLEAN,
 *     bioSubtype          BOOLEAN,
 *     chaResp             BOOLEAN,
 *     bdbCreation         BOOLEAN,
 *     bdbIndex            BOOLEAN,
 *     procLevel           BOOLEAN,
 *     product             BOOLEAN,
 *     purpose             BOOLEAN,
 *     quality             BOOLEAN,
 *     bdbValidity         BOOLEAN,
 *     birCreation         BOOLEAN,
 *     birCreator          BOOLEAN,
 *     birIndex            BOOLEAN,
 *     patronFormat        BOOLEAN,
 *     payload             BOOLEAN,
 *     birValidity         BOOLEAN,
 *     patronHdrVersion    BOOLEAN,
 *     sbFormat            BOOLEAN,
 *     cbeffVers           BOOLEAN,
 *     sb                  BOOLEAN
 *     -- Original typo read: sb OCTET STRING BOOLEAN
 * }
 * ```
 * 
 * @class
 */
export
class AllElementsWithDefaultsBitOriented_fieldPresence {
    /**
     * @summary `encryptOpts`.
     * @public
     * @readonly
     */
    readonly encryptOpts: BOOLEAN;
    /**
     * @summary `integOpts`.
     * @public
     * @readonly
     */
    readonly integOpts: BOOLEAN;
    /**
     * @summary `subHeaderCount`.
     * @public
     * @readonly
     */
    readonly subHeaderCount: BOOLEAN;
    /**
     * @summary `bdbLength`.
     * @public
     * @readonly
     */
    readonly bdbLength: BOOLEAN;
    /**
     * @summary `bioType`.
     * @public
     * @readonly
     */
    readonly bioType: BOOLEAN;
    /**
     * @summary `bioSubtype`.
     * @public
     * @readonly
     */
    readonly bioSubtype: BOOLEAN;
    /**
     * @summary `chaResp`.
     * @public
     * @readonly
     */
    readonly chaResp: BOOLEAN;
    /**
     * @summary `bdbCreation`.
     * @public
     * @readonly
     */
    readonly bdbCreation: BOOLEAN;
    /**
     * @summary `bdbIndex`.
     * @public
     * @readonly
     */
    readonly bdbIndex: BOOLEAN;
    /**
     * @summary `procLevel`.
     * @public
     * @readonly
     */
    readonly procLevel: BOOLEAN;
    /**
     * @summary `product`.
     * @public
     * @readonly
     */
    readonly product: BOOLEAN;
    /**
     * @summary `purpose`.
     * @public
     * @readonly
     */
    readonly purpose: BOOLEAN;
    /**
     * @summary `quality`.
     * @public
     * @readonly
     */
    readonly quality: BOOLEAN;
    /**
     * @summary `bdbValidity`.
     * @public
     * @readonly
     */
    readonly bdbValidity: BOOLEAN;
    /**
     * @summary `birCreation`.
     * @public
     * @readonly
     */
    readonly birCreation: BOOLEAN;
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
     * @summary `patronFormat`.
     * @public
     * @readonly
     */
    readonly patronFormat: BOOLEAN;
    /**
     * @summary `payload`.
     * @public
     * @readonly
     */
    readonly payload: BOOLEAN;
    /**
     * @summary `birValidity`.
     * @public
     * @readonly
     */
    readonly birValidity: BOOLEAN;
    /**
     * @summary `patronHdrVersion`.
     * @public
     * @readonly
     */
    readonly patronHdrVersion: BOOLEAN;
    /**
     * @summary `sbFormat`.
     * @public
     * @readonly
     */
    readonly sbFormat: BOOLEAN;
    /**
     * @summary `cbeffVers`.
     * @public
     * @readonly
     */
    readonly cbeffVers: BOOLEAN;
    /**
     * @summary `sb`.
     * @public
     * @readonly
     */
    readonly sb: BOOLEAN;

    constructor (
        encryptOpts: BOOLEAN,
        integOpts: BOOLEAN,
        subHeaderCount: BOOLEAN,
        bdbLength: BOOLEAN,
        bioType: BOOLEAN,
        bioSubtype: BOOLEAN,
        chaResp: BOOLEAN,
        bdbCreation: BOOLEAN,
        bdbIndex: BOOLEAN,
        procLevel: BOOLEAN,
        product: BOOLEAN,
        purpose: BOOLEAN,
        quality: BOOLEAN,
        bdbValidity: BOOLEAN,
        birCreation: BOOLEAN,
        birCreator: BOOLEAN,
        birIndex: BOOLEAN,
        patronFormat: BOOLEAN,
        payload: BOOLEAN,
        birValidity: BOOLEAN,
        patronHdrVersion: BOOLEAN,
        sbFormat: BOOLEAN,
        cbeffVers: BOOLEAN,
        sb: BOOLEAN
    ) {
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
        this.sb = sb;
    }

    /**
     * @summary Restructures an object into a AllElementsWithDefaultsBitOriented_fieldPresence
     * @description
     * 
     * This takes an `object` and converts it to a `AllElementsWithDefaultsBitOriented_fieldPresence`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AllElementsWithDefaultsBitOriented_fieldPresence`.
     * @returns {AllElementsWithDefaultsBitOriented_fieldPresence}
     */
    public static _from_object (_o: { [_K in keyof (AllElementsWithDefaultsBitOriented_fieldPresence)]: (AllElementsWithDefaultsBitOriented_fieldPresence)[_K] }): AllElementsWithDefaultsBitOriented_fieldPresence {
        return new AllElementsWithDefaultsBitOriented_fieldPresence(_o.encryptOpts, _o.integOpts, _o.subHeaderCount, _o.bdbLength, _o.bioType, _o.bioSubtype, _o.chaResp, _o.bdbCreation, _o.bdbIndex, _o.procLevel, _o.product, _o.purpose, _o.quality, _o.bdbValidity, _o.birCreation, _o.birCreator, _o.birIndex, _o.patronFormat, _o.payload, _o.birValidity, _o.patronHdrVersion, _o.sbFormat, _o.cbeffVers, _o.sb);
    }


}

/**
 * @summary The Leading Root Component Types of AllElementsWithDefaultsBitOriented_fieldPresence
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AllElementsWithDefaultsBitOriented_fieldPresence: $.ComponentSpec[] = [
    new $.ComponentSpec("encryptOpts", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("integOpts", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("subHeaderCount", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("bdbLength", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("bioType", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("bioSubtype", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("chaResp", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("bdbCreation", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("bdbIndex", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("procLevel", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("product", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("purpose", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("quality", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("bdbValidity", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("birCreation", false, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("birCreator", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("birIndex", false, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("patronFormat", false, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("payload", false, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("birValidity", false, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("patronHdrVersion", false, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("sbFormat", false, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("cbeffVers", false, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("sb", false, $.hasTag(_TagClass.context, 23))
];

/**
 * @summary The Trailing Root Component Types of AllElementsWithDefaultsBitOriented_fieldPresence
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AllElementsWithDefaultsBitOriented_fieldPresence: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AllElementsWithDefaultsBitOriented_fieldPresence
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AllElementsWithDefaultsBitOriented_fieldPresence: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AllElementsWithDefaultsBitOriented_fieldPresence: $.ASN1Decoder<AllElementsWithDefaultsBitOriented_fieldPresence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AllElementsWithDefaultsBitOriented_fieldPresence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AllElementsWithDefaultsBitOriented_fieldPresence (el: _Element): AllElementsWithDefaultsBitOriented_fieldPresence {
    if (!_cached_decoder_for_AllElementsWithDefaultsBitOriented_fieldPresence) { _cached_decoder_for_AllElementsWithDefaultsBitOriented_fieldPresence = function (el: _Element): AllElementsWithDefaultsBitOriented_fieldPresence {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 24) {
        throw new _ConstructionError("AllElementsWithDefaultsBitOriented-fieldPresence contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "encryptOpts";
    sequence[1].name = "integOpts";
    sequence[2].name = "subHeaderCount";
    sequence[3].name = "bdbLength";
    sequence[4].name = "bioType";
    sequence[5].name = "bioSubtype";
    sequence[6].name = "chaResp";
    sequence[7].name = "bdbCreation";
    sequence[8].name = "bdbIndex";
    sequence[9].name = "procLevel";
    sequence[10].name = "product";
    sequence[11].name = "purpose";
    sequence[12].name = "quality";
    sequence[13].name = "bdbValidity";
    sequence[14].name = "birCreation";
    sequence[15].name = "birCreator";
    sequence[16].name = "birIndex";
    sequence[17].name = "patronFormat";
    sequence[18].name = "payload";
    sequence[19].name = "birValidity";
    sequence[20].name = "patronHdrVersion";
    sequence[21].name = "sbFormat";
    sequence[22].name = "cbeffVers";
    sequence[23].name = "sb";
    const encryptOpts: BOOLEAN = $._decodeBoolean(sequence[0]);
    const integOpts: BOOLEAN = $._decodeBoolean(sequence[1]);
    const subHeaderCount: BOOLEAN = $._decodeBoolean(sequence[2]);
    const bdbLength: BOOLEAN = $._decodeBoolean(sequence[3]);
    const bioType: BOOLEAN = $._decodeBoolean(sequence[4]);
    const bioSubtype: BOOLEAN = $._decodeBoolean(sequence[5]);
    const chaResp: BOOLEAN = $._decodeBoolean(sequence[6]);
    const bdbCreation: BOOLEAN = $._decodeBoolean(sequence[7]);
    const bdbIndex: BOOLEAN = $._decodeBoolean(sequence[8]);
    const procLevel: BOOLEAN = $._decodeBoolean(sequence[9]);
    const product: BOOLEAN = $._decodeBoolean(sequence[10]);
    const purpose: BOOLEAN = $._decodeBoolean(sequence[11]);
    const quality: BOOLEAN = $._decodeBoolean(sequence[12]);
    const bdbValidity: BOOLEAN = $._decodeBoolean(sequence[13]);
    const birCreation: BOOLEAN = $._decodeBoolean(sequence[14]);
    const birCreator: BOOLEAN = $._decodeBoolean(sequence[15]);
    const birIndex: BOOLEAN = $._decodeBoolean(sequence[16]);
    const patronFormat: BOOLEAN = $._decodeBoolean(sequence[17]);
    const payload: BOOLEAN = $._decodeBoolean(sequence[18]);
    const birValidity: BOOLEAN = $._decodeBoolean(sequence[19]);
    const patronHdrVersion: BOOLEAN = $._decodeBoolean(sequence[20]);
    const sbFormat: BOOLEAN = $._decodeBoolean(sequence[21]);
    const cbeffVers: BOOLEAN = $._decodeBoolean(sequence[22]);
    const sb: BOOLEAN = $._decodeBoolean(sequence[23]);
    return new AllElementsWithDefaultsBitOriented_fieldPresence(
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
        sb,

    );
}; }
    return _cached_decoder_for_AllElementsWithDefaultsBitOriented_fieldPresence(el);
}

let _cached_encoder_for_AllElementsWithDefaultsBitOriented_fieldPresence: $.ASN1Encoder<AllElementsWithDefaultsBitOriented_fieldPresence> | null = null;

/**
 * @summary Encodes a(n) AllElementsWithDefaultsBitOriented_fieldPresence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AllElementsWithDefaultsBitOriented_fieldPresence, encoded as an ASN.1 Element.
 */
export
function _encode_AllElementsWithDefaultsBitOriented_fieldPresence (value: AllElementsWithDefaultsBitOriented_fieldPresence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AllElementsWithDefaultsBitOriented_fieldPresence) { _cached_encoder_for_AllElementsWithDefaultsBitOriented_fieldPresence = function (value: AllElementsWithDefaultsBitOriented_fieldPresence, elGetter: $.ASN1Encoder<AllElementsWithDefaultsBitOriented_fieldPresence>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.encryptOpts, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.integOpts, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.subHeaderCount, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.bdbLength, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.bioType, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.bioSubtype, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.chaResp, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.bdbCreation, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeBoolean, $.BER)(value.bdbIndex, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeBoolean, $.BER)(value.procLevel, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeBoolean, $.BER)(value.product, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeBoolean, $.BER)(value.purpose, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 12, () => $._encodeBoolean, $.BER)(value.quality, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 13, () => $._encodeBoolean, $.BER)(value.bdbValidity, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 14, () => $._encodeBoolean, $.BER)(value.birCreation, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 15, () => $._encodeBoolean, $.BER)(value.birCreator, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 16, () => $._encodeBoolean, $.BER)(value.birIndex, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 17, () => $._encodeBoolean, $.BER)(value.patronFormat, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 18, () => $._encodeBoolean, $.BER)(value.payload, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 19, () => $._encodeBoolean, $.BER)(value.birValidity, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 20, () => $._encodeBoolean, $.BER)(value.patronHdrVersion, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 21, () => $._encodeBoolean, $.BER)(value.sbFormat, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 22, () => $._encodeBoolean, $.BER)(value.cbeffVers, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 23, () => $._encodeBoolean, $.BER)(value.sb, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_AllElementsWithDefaultsBitOriented_fieldPresence(value, elGetter);
}


/* eslint-enable */
