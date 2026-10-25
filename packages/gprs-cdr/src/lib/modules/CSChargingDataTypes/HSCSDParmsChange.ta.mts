/* eslint-disable */
import {
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InitiatingParty, _decode_InitiatingParty, _encode_InitiatingParty, _enum_for_InitiatingParty } from "../CSChargingDataTypes/InitiatingParty.ta.mjs";
import { AiurRequested, _decode_AiurRequested, _encode_AiurRequested, _enum_for_AiurRequested } from "../CSChargingDataTypes/AiurRequested.ta.mjs";
import { ChannelCoding, _decode_ChannelCoding, _encode_ChannelCoding, _enum_for_ChannelCoding } from "../CSChargingDataTypes/ChannelCoding.ta.mjs";


/**
 * @summary HSCSDParmsChange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HSCSDParmsChange ::= SEQUENCE {
 *    changeTime           [0] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    hSCSDChanAllocated   [1] IMPLICIT INTEGER,
 *    initiatingParty      [2] IMPLICIT InitiatingParty OPTIONAL,
 *    aiurRequested        [3] IMPLICIT AiurRequested OPTIONAL,
 *    chanCodingUsed       [4] IMPLICIT ChannelCoding,
 *    hSCSDChanRequested   [5] IMPLICIT INTEGER OPTIONAL}
 * ```
 * 
 * @class
 */
export
class HSCSDParmsChange {
    /**
     * @summary `changeTime`.
     * @public
     * @readonly
     */
    readonly changeTime: OCTET_STRING;
    /**
     * @summary `hSCSDChanAllocated`.
     * @public
     * @readonly
     */
    readonly hSCSDChanAllocated: INTEGER;
    /**
     * @summary `initiatingParty`.
     * @public
     * @readonly
     */
    readonly initiatingParty: OPTIONAL<InitiatingParty>;
    /**
     * @summary `aiurRequested`.
     * @public
     * @readonly
     */
    readonly aiurRequested: OPTIONAL<AiurRequested>;
    /**
     * @summary `chanCodingUsed`.
     * @public
     * @readonly
     */
    readonly chanCodingUsed: ChannelCoding;
    /**
     * @summary `hSCSDChanRequested`.
     * @public
     * @readonly
     */
    readonly hSCSDChanRequested: OPTIONAL<INTEGER>;

    constructor (
        changeTime: OCTET_STRING,
        hSCSDChanAllocated: INTEGER,
        initiatingParty: OPTIONAL<InitiatingParty>,
        aiurRequested: OPTIONAL<AiurRequested>,
        chanCodingUsed: ChannelCoding,
        hSCSDChanRequested?: OPTIONAL<INTEGER>
    ) {
        this.changeTime = changeTime;
        this.hSCSDChanAllocated = hSCSDChanAllocated;
        this.initiatingParty = initiatingParty;
        this.aiurRequested = aiurRequested;
        this.chanCodingUsed = chanCodingUsed;
        this.hSCSDChanRequested = hSCSDChanRequested;
    
        if ((this.changeTime.length !== 9)) {
            throw new ASN1SizeError("HSCSDParmsChange.changeTime violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a HSCSDParmsChange
     * @description
     *
     * This takes an `object` and converts it to a `HSCSDParmsChange`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HSCSDParmsChange`.
     * @returns {HSCSDParmsChange}
     */
    public static _from_object (_o: { [_K in keyof (HSCSDParmsChange)]: (HSCSDParmsChange)[_K] }): HSCSDParmsChange {
        return new HSCSDParmsChange(_o.changeTime, _o.hSCSDChanAllocated, _o.initiatingParty, _o.aiurRequested, _o.chanCodingUsed, _o.hSCSDChanRequested);
    }

        /**
         * @summary The enum used as the type of the component `initiatingParty`
         * @public
         * @static
         */

    public static _enum_for_initiatingParty = _enum_for_InitiatingParty;        /**
         * @summary The enum used as the type of the component `aiurRequested`
         * @public
         * @static
         */

    public static _enum_for_aiurRequested = _enum_for_AiurRequested;        /**
         * @summary The enum used as the type of the component `chanCodingUsed`
         * @public
         * @static
         */

    public static _enum_for_chanCodingUsed = _enum_for_ChannelCoding;
}

/**
 * @summary The Leading Root Component Types of HSCSDParmsChange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HSCSDParmsChange: $.ComponentSpec[] = [
    new $.ComponentSpec("changeTime", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("hSCSDChanAllocated", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("initiatingParty", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("aiurRequested", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("chanCodingUsed", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("hSCSDChanRequested", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of HSCSDParmsChange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HSCSDParmsChange: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HSCSDParmsChange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_HSCSDParmsChange: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HSCSDParmsChange: $.ASN1Decoder<HSCSDParmsChange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HSCSDParmsChange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HSCSDParmsChange (el: _Element): HSCSDParmsChange {
    if (!_cached_decoder_for_HSCSDParmsChange) { _cached_decoder_for_HSCSDParmsChange = function (el: _Element): HSCSDParmsChange {
    let changeTime!: OCTET_STRING;
    let hSCSDChanAllocated!: INTEGER;
    let initiatingParty: OPTIONAL<InitiatingParty>;
    let aiurRequested: OPTIONAL<AiurRequested>;
    let chanCodingUsed!: ChannelCoding;
    let hSCSDChanRequested: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "changeTime": (_el: _Element): void => { changeTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "hSCSDChanAllocated": (_el: _Element): void => { hSCSDChanAllocated = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "initiatingParty": (_el: _Element): void => { initiatingParty = $._decode_implicit<InitiatingParty>(() => _decode_InitiatingParty)(_el); },
        "aiurRequested": (_el: _Element): void => { aiurRequested = $._decode_implicit<AiurRequested>(() => _decode_AiurRequested)(_el); },
        "chanCodingUsed": (_el: _Element): void => { chanCodingUsed = $._decode_implicit<ChannelCoding>(() => _decode_ChannelCoding)(_el); },
        "hSCSDChanRequested": (_el: _Element): void => { hSCSDChanRequested = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_HSCSDParmsChange,
        _extension_additions_list_spec_for_HSCSDParmsChange,
        _root_component_type_list_2_spec_for_HSCSDParmsChange,
        undefined,
    );
    return new HSCSDParmsChange(
        changeTime,
        hSCSDChanAllocated,
        initiatingParty,
        aiurRequested,
        chanCodingUsed,
        hSCSDChanRequested
    );
}; }
    return _cached_decoder_for_HSCSDParmsChange(el);
}

let _cached_encoder_for_HSCSDParmsChange: $.ASN1Encoder<HSCSDParmsChange> | null = null;

/**
 * @summary Encodes a(n) HSCSDParmsChange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HSCSDParmsChange, encoded as an ASN.1 Element.
 */
export
function _encode_HSCSDParmsChange (value: HSCSDParmsChange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HSCSDParmsChange) { _cached_encoder_for_HSCSDParmsChange = function (value: HSCSDParmsChange, _elGetter: $.ASN1Encoder<HSCSDParmsChange>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.changeTime, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.hSCSDChanAllocated, $.BER));
    if (value.initiatingParty !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_InitiatingParty, $.BER)(value.initiatingParty, $.BER));
    }
    if (value.aiurRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_AiurRequested, $.BER)(value.aiurRequested, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_ChannelCoding, $.BER)(value.chanCodingUsed, $.BER));
    if (value.hSCSDChanRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.hSCSDChanRequested, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_HSCSDParmsChange(value, elGetter);
}


/* eslint-enable */
