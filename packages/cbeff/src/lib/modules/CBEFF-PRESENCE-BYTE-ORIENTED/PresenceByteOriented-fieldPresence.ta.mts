/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type BOOLEAN,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PresenceByteOriented_fieldPresence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceByteOriented-fieldPresence ::= SEQUENCE {
 *     bioType             BOOLEAN,
 *     bioSubtype          BOOLEAN,
 *     bdbCreation         BOOLEAN,
 *     procLevel           BOOLEAN,
 *     bdbProduct          BOOLEAN,
 *     bdbPurpose          BOOLEAN,
 *     bdbQuality          BOOLEAN,
 *     bdbValidity         BOOLEAN,
 *     birCreation         BOOLEAN,
 *     birValidity         BOOLEAN,
 *     patronHdrVersion    BOOLEAN,
 *     cbeffVers           BOOLEAN,
 *     subHeaderCount      BOOLEAN,
 *     bdbLength           BOOLEAN
 * }
 * ```
 * 
 * @class
 */
export
class PresenceByteOriented_fieldPresence {
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
     * @summary `bdbCreation`.
     * @public
     * @readonly
     */
    readonly bdbCreation: BOOLEAN;
    /**
     * @summary `procLevel`.
     * @public
     * @readonly
     */
    readonly procLevel: BOOLEAN;
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
     * @summary `cbeffVers`.
     * @public
     * @readonly
     */
    readonly cbeffVers: BOOLEAN;
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

    constructor (
        bioType: BOOLEAN,
        bioSubtype: BOOLEAN,
        bdbCreation: BOOLEAN,
        procLevel: BOOLEAN,
        bdbProduct: BOOLEAN,
        bdbPurpose: BOOLEAN,
        bdbQuality: BOOLEAN,
        bdbValidity: BOOLEAN,
        birCreation: BOOLEAN,
        birValidity: BOOLEAN,
        patronHdrVersion: BOOLEAN,
        cbeffVers: BOOLEAN,
        subHeaderCount: BOOLEAN,
        bdbLength: BOOLEAN
    ) {
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
    }

    /**
     * @summary Restructures an object into a PresenceByteOriented_fieldPresence
     * @description
     * 
     * This takes an `object` and converts it to a `PresenceByteOriented_fieldPresence`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PresenceByteOriented_fieldPresence`.
     * @returns {PresenceByteOriented_fieldPresence}
     */
    public static _from_object (_o: { [_K in keyof (PresenceByteOriented_fieldPresence)]: (PresenceByteOriented_fieldPresence)[_K] }): PresenceByteOriented_fieldPresence {
        return new PresenceByteOriented_fieldPresence(_o.bioType, _o.bioSubtype, _o.bdbCreation, _o.procLevel, _o.bdbProduct, _o.bdbPurpose, _o.bdbQuality, _o.bdbValidity, _o.birCreation, _o.birValidity, _o.patronHdrVersion, _o.cbeffVers, _o.subHeaderCount, _o.bdbLength);
    }

}

/**
 * @summary The Leading Root Component Types of PresenceByteOriented_fieldPresence
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PresenceByteOriented_fieldPresence: $.ComponentSpec[] = [
    new $.ComponentSpec("bioType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("bioSubtype", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("bdbCreation", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("procLevel", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("bdbProduct", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("bdbPurpose", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("bdbQuality", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("bdbValidity", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("birCreation", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("birValidity", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("patronHdrVersion", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("cbeffVers", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("subHeaderCount", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("bdbLength", false, $.hasTag(_TagClass.context, 13))
];

/**
 * @summary The Trailing Root Component Types of PresenceByteOriented_fieldPresence
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PresenceByteOriented_fieldPresence: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PresenceByteOriented_fieldPresence
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PresenceByteOriented_fieldPresence: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PresenceByteOriented_fieldPresence: $.ASN1Decoder<PresenceByteOriented_fieldPresence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PresenceByteOriented_fieldPresence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PresenceByteOriented_fieldPresence (el: _Element): PresenceByteOriented_fieldPresence {
    if (!_cached_decoder_for_PresenceByteOriented_fieldPresence) { _cached_decoder_for_PresenceByteOriented_fieldPresence = function (el: _Element): PresenceByteOriented_fieldPresence {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 14) {
        throw new _ConstructionError("PresenceByteOriented-fieldPresence contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "bioType";
    sequence[1].name = "bioSubtype";
    sequence[2].name = "bdbCreation";
    sequence[3].name = "procLevel";
    sequence[4].name = "bdbProduct";
    sequence[5].name = "bdbPurpose";
    sequence[6].name = "bdbQuality";
    sequence[7].name = "bdbValidity";
    sequence[8].name = "birCreation";
    sequence[9].name = "birValidity";
    sequence[10].name = "patronHdrVersion";
    sequence[11].name = "cbeffVers";
    sequence[12].name = "subHeaderCount";
    sequence[13].name = "bdbLength";
    const bioType: BOOLEAN = $._decodeBoolean(sequence[0]);
    const bioSubtype: BOOLEAN = $._decodeBoolean(sequence[1]);
    const bdbCreation: BOOLEAN = $._decodeBoolean(sequence[2]);
    const procLevel: BOOLEAN = $._decodeBoolean(sequence[3]);
    const bdbProduct: BOOLEAN = $._decodeBoolean(sequence[4]);
    const bdbPurpose: BOOLEAN = $._decodeBoolean(sequence[5]);
    const bdbQuality: BOOLEAN = $._decodeBoolean(sequence[6]);
    const bdbValidity: BOOLEAN = $._decodeBoolean(sequence[7]);
    const birCreation: BOOLEAN = $._decodeBoolean(sequence[8]);
    const birValidity: BOOLEAN = $._decodeBoolean(sequence[9]);
    const patronHdrVersion: BOOLEAN = $._decodeBoolean(sequence[10]);
    const cbeffVers: BOOLEAN = $._decodeBoolean(sequence[11]);
    const subHeaderCount: BOOLEAN = $._decodeBoolean(sequence[12]);
    const bdbLength: BOOLEAN = $._decodeBoolean(sequence[13]);
    return new PresenceByteOriented_fieldPresence(
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

    );
}; }
    return _cached_decoder_for_PresenceByteOriented_fieldPresence(el);
}

let _cached_encoder_for_PresenceByteOriented_fieldPresence: $.ASN1Encoder<PresenceByteOriented_fieldPresence> | null = null;

/**
 * @summary Encodes a(n) PresenceByteOriented_fieldPresence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresenceByteOriented_fieldPresence, encoded as an ASN.1 Element.
 */
export
function _encode_PresenceByteOriented_fieldPresence (value: PresenceByteOriented_fieldPresence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PresenceByteOriented_fieldPresence) { _cached_encoder_for_PresenceByteOriented_fieldPresence = function (value: PresenceByteOriented_fieldPresence, elGetter: $.ASN1Encoder<PresenceByteOriented_fieldPresence>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.bioType, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.bioSubtype, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.bdbCreation, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.procLevel, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.bdbProduct, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.bdbPurpose, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.bdbQuality, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.bdbValidity, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeBoolean, $.BER)(value.birCreation, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeBoolean, $.BER)(value.birValidity, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeBoolean, $.BER)(value.patronHdrVersion, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeBoolean, $.BER)(value.cbeffVers, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 12, () => $._encodeBoolean, $.BER)(value.subHeaderCount, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 13, () => $._encodeBoolean, $.BER)(value.bdbLength, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_PresenceByteOriented_fieldPresence(value, elGetter);
}

/* eslint-enable */
