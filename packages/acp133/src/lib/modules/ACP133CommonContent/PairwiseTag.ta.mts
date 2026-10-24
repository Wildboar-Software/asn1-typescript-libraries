/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    UTCTime,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Kmid, _decode_Kmid, _encode_Kmid } from "../ACP133CommonContent/Kmid.ta.mjs";


/**
 * @summary PairwiseTag
 * @description
 *
 * Identifies a generation of keying material. Imported
 * from SDN.701. Each {@link UKMEntry} carries one.
 *
 * SDN.701 bounds `edition` by `1..ub-edition-size`.
 * That bound is not applied in this module.
 * `ub-edition-size` is not defined here. `date` stays
 * `UTCTime` because the type is imported. ACP 133
 * (June 1998), paragraph 302, requires GeneralizedTime
 * only for new time definitions.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PairwiseTag ::= SEQUENCE  {
 *     kmid        Kmid,
 *     edition        INTEGER --(1..ub-edition-size)--,
 *     date        UTCTime OPTIONAL }
 * ```
 * 
 * @class
 */
export
class PairwiseTag {
    /**
     * Key-material identifier. See {@link Kmid}.
     * @public
     * @readonly
     */
    public readonly kmid: Kmid;
    /**
     * Edition of the key material named by `kmid`.
     * The SDN.701 bound is not enforced here.
     * @public
     * @readonly
     */
    public readonly edition: INTEGER;
    /**
     * When this edition is dated, if the source
     * supplied a time. The imported field is `UTCTime`.
     * @public
     * @readonly
     */
    public readonly date: OPTIONAL<UTCTime>;

    constructor (
        kmid: Kmid,
        edition: INTEGER,
        date?: OPTIONAL<UTCTime>
    ) {
        this.kmid = kmid;
        this.edition = edition;
        this.date = date;
    }

    /**
     * @summary Restructures an object into a PairwiseTag
     * @description
     * 
     * This takes an `object` and converts it to a `PairwiseTag`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PairwiseTag`.
     * @returns {PairwiseTag}
     */
    public static _from_object (_o: { [_K in keyof (PairwiseTag)]: (PairwiseTag)[_K] }): PairwiseTag {
        return new PairwiseTag(_o.kmid, _o.edition, _o.date);
    }


}

/**
 * @summary The Leading Root Component Types of PairwiseTag
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PairwiseTag: $.ComponentSpec[] = [
    new $.ComponentSpec("kmid", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("edition", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("date", true, $.hasTag(_TagClass.universal, 23))
];

/**
 * @summary The Trailing Root Component Types of PairwiseTag
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PairwiseTag: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PairwiseTag
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PairwiseTag: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PairwiseTag: $.ASN1Decoder<PairwiseTag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PairwiseTag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PairwiseTag (el: _Element): PairwiseTag {
    if (!_cached_decoder_for_PairwiseTag) { _cached_decoder_for_PairwiseTag = function (el: _Element): PairwiseTag {
    let kmid!: Kmid;
    let edition!: INTEGER;
    let date: OPTIONAL<UTCTime>;
    const callbacks: $.DecodingMap = {
        "kmid": (_el: _Element): void => { kmid = _decode_Kmid(_el); },
        "edition": (_el: _Element): void => { edition = $._decodeInteger(_el); },
        "date": (_el: _Element): void => { date = $._decodeUTCTime(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PairwiseTag,
        _extension_additions_list_spec_for_PairwiseTag,
        _root_component_type_list_2_spec_for_PairwiseTag,
        undefined,
    );
    return new PairwiseTag(
        kmid,
        edition,
        date
    );
}; }
    return _cached_decoder_for_PairwiseTag(el);
}

let _cached_encoder_for_PairwiseTag: $.ASN1Encoder<PairwiseTag> | null = null;

/**
 * @summary Encodes a(n) PairwiseTag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PairwiseTag, encoded as an ASN.1 Element.
 */
export
function _encode_PairwiseTag (value: PairwiseTag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PairwiseTag) { _cached_encoder_for_PairwiseTag = function (value: PairwiseTag): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Kmid(value.kmid, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.edition, $.BER),
            /* IF_ABSENT  */ ((value.date === undefined) ? undefined : $._encodeUTCTime(value.date, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PairwiseTag(value, elGetter);
}


/* eslint-enable */
