/* eslint-disable */
import {
    type INTEGER,
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type EncodedString, _decode_EncodedString, _encode_EncodedString } from "../MmsHI2Operations/EncodedString.ta.mjs";
// export { EncodedString, _decode_EncodedString, _encode_EncodedString } from "../MmsHI2Operations/EncodedString.ta.mjs";


/**
 * @summary PreviouslySentBy
 * @description
 * 
 * One MMS client that forwarded the MM or originally sent it, and the sequence
 * number of that hop. A higher sequence number is a later forward (table
 * 15.3.6.1.2).
 * 
 * 3GPP TS 33.108, table 15.3.6.1.2 and annex B.15.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PreviouslySentBy ::= SEQUENCE
 * {
 *     forwardedCount        [1] INTEGER,
 *     forwardedPartyID    [2] EncodedString,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class PreviouslySentBy {
    /**
     * @summary `forwardedCount`.
     * @description
     * 
     * Sequence number of this forward or original send. A higher number is
     * later in time. The same number ties this party to the matching date and
     * time.
     * 
     * 3GPP TS 33.108, table 15.3.6.1.2.
     * @public
     * @readonly
     */
    readonly forwardedCount: INTEGER;
    /**
     * @summary `forwardedPartyID`.
     * @description
     * 
     * Address of the MMS client that forwarded the MM or originally sent it
     * (table 15.3.6.1.2).
     * 
     * 3GPP TS 33.108, table 15.3.6.1.2 and annex B.15.
     * @public
     * @readonly
     */
    readonly forwardedPartyID: EncodedString;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of TS 33.108 does not define.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        forwardedCount: INTEGER,
        forwardedPartyID: EncodedString,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.forwardedCount = forwardedCount;
        this.forwardedPartyID = forwardedPartyID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PreviouslySentBy
     * @description
     * 
     * This takes an `object` and converts it to a `PreviouslySentBy`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PreviouslySentBy`.
     * @returns {PreviouslySentBy}
     */
    public static _from_object (_o: { [_K in keyof (PreviouslySentBy)]: (PreviouslySentBy)[_K] }): PreviouslySentBy {
        return new PreviouslySentBy(_o.forwardedCount, _o.forwardedPartyID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PreviouslySentBy
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PreviouslySentBy: $.ComponentSpec[] = [
    new $.ComponentSpec("forwardedCount", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("forwardedPartyID", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PreviouslySentBy
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PreviouslySentBy: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PreviouslySentBy
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PreviouslySentBy: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PreviouslySentBy: $.ASN1Decoder<PreviouslySentBy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PreviouslySentBy
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PreviouslySentBy (el: _Element): PreviouslySentBy {
    if (!_cached_decoder_for_PreviouslySentBy) { _cached_decoder_for_PreviouslySentBy = function (el: _Element): PreviouslySentBy {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PreviouslySentBy contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "forwardedCount";
    sequence[1].name = "forwardedPartyID";
    let forwardedCount!: INTEGER;
    let forwardedPartyID!: EncodedString;
    forwardedCount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    forwardedPartyID = $._decode_explicit<EncodedString>(() => _decode_EncodedString)(sequence[1]);
    return new PreviouslySentBy(
        forwardedCount,
        forwardedPartyID,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_PreviouslySentBy(el);
}

let _cached_encoder_for_PreviouslySentBy: $.ASN1Encoder<PreviouslySentBy> | null = null;

/**
 * @summary Encodes a(n) PreviouslySentBy into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PreviouslySentBy, encoded as an ASN.1 Element.
 */
export
function _encode_PreviouslySentBy (value: PreviouslySentBy, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PreviouslySentBy) { _cached_encoder_for_PreviouslySentBy = function (value: PreviouslySentBy, elGetter: $.ASN1Encoder<PreviouslySentBy>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.forwardedCount, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_EncodedString, $.BER)(value.forwardedPartyID, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PreviouslySentBy(value, elGetter);
}


/* eslint-enable */
