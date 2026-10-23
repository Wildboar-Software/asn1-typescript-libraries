/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NrOfMessages, _decode_NrOfMessages, _encode_NrOfMessages } from "../SS-MCM-Operations-asn1-97/NrOfMessages.ta.mjs";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../SS-MCM-Operations-asn1-97/TimeStamp.ta.mjs";
import { Priority, _decode_Priority, _encode_Priority } from "../SS-MCM-Operations-asn1-97/Priority.ta.mjs";

/**
 * @summary CompressedInfo
 * @description
 *
 * Compressed information in an update (ECMA-347 §6.3.1,
 * §6.5.1.1.4): a count, and optionally a timestamp and a
 * priority. §6.5.1.1.4 does not say which message those
 * optional values refer to.
 *
 * The "latest highest-priority New Message" rules in
 * §6.5.1.1.2 apply to `mCMNewMsg`, not to this type.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompressedInfo ::= SEQUENCE {
 *     nrOfMessages NrOfMessages,
 *     lastTimeStamp TimeStamp OPTIONAL,
 *     highestPriority Priority OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CompressedInfo {
    /**
     * @summary `nrOfMessages`.
     * @description
     *
     * How many messages this summary covers. Whether they
     * are new, retrieved, or both depends on the
     * `UpdateInfo` alternative that contains it.
     * ECMA-347 §6.3.1.
     * @public
     * @readonly
     */
    readonly nrOfMessages: NrOfMessages;
    /**
     * @summary `lastTimeStamp`.
     * @description
     *
     * Optional timestamp. §6.3.1 and §6.5.1.1.4 do not say
     * which message's time this is.
     * @public
     * @readonly
     */
    readonly lastTimeStamp: OPTIONAL<TimeStamp>;
    /**
     * @summary `highestPriority`.
     * @description
     *
     * Optional priority. 0 is highest and 9 is lowest
     * (§6.3.1). The update procedure does not say which
     * message it refers to.
     * @public
     * @readonly
     */
    readonly highestPriority: OPTIONAL<Priority>;

    constructor (
        nrOfMessages: NrOfMessages,
        lastTimeStamp: OPTIONAL<TimeStamp>,
        highestPriority: OPTIONAL<Priority>
    ) {
        this.nrOfMessages = nrOfMessages;
        this.lastTimeStamp = lastTimeStamp;
        this.highestPriority = highestPriority;
    }

    /**
     * @summary Restructures an object into a CompressedInfo
     * @description
     * 
     * This takes an `object` and converts it to a `CompressedInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompressedInfo`.
     * @returns {CompressedInfo}
     */
    public static _from_object (_o: { [_K in keyof (CompressedInfo)]: (CompressedInfo)[_K] }): CompressedInfo {
        return new CompressedInfo(_o.nrOfMessages, _o.lastTimeStamp, _o.highestPriority);
    }

}

/**
 * @summary The Leading Root Component Types of CompressedInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CompressedInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("nrOfMessages", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("lastTimeStamp", true, $.hasTag(_TagClass.universal, 24)),
    new $.ComponentSpec("highestPriority", true, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CompressedInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CompressedInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CompressedInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CompressedInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CompressedInfo: $.ASN1Decoder<CompressedInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompressedInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompressedInfo (el: _Element): CompressedInfo {
    if (!_cached_decoder_for_CompressedInfo) { _cached_decoder_for_CompressedInfo = function (el: _Element): CompressedInfo {
    let nrOfMessages!: NrOfMessages;
    let lastTimeStamp: OPTIONAL<TimeStamp>;
    let highestPriority: OPTIONAL<Priority>;
    const callbacks: $.DecodingMap = {
        "nrOfMessages": (_el: _Element): void => { nrOfMessages = _decode_NrOfMessages(_el); },
        "lastTimeStamp": (_el: _Element): void => { lastTimeStamp = _decode_TimeStamp(_el); },
        "highestPriority": (_el: _Element): void => { highestPriority = _decode_Priority(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CompressedInfo,
        _extension_additions_list_spec_for_CompressedInfo,
        _root_component_type_list_2_spec_for_CompressedInfo,
        undefined,
    );
    return new CompressedInfo(
        nrOfMessages,
        lastTimeStamp,
        highestPriority
    );
}; }
    return _cached_decoder_for_CompressedInfo(el);
}

let _cached_encoder_for_CompressedInfo: $.ASN1Encoder<CompressedInfo> | null = null;

/**
 * @summary Encodes a(n) CompressedInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompressedInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CompressedInfo (value: CompressedInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompressedInfo) { _cached_encoder_for_CompressedInfo = function (value: CompressedInfo, _elGetter: $.ASN1Encoder<CompressedInfo>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_NrOfMessages(value.nrOfMessages, $.BER));
    if (value.lastTimeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_TimeStamp(value.lastTimeStamp, $.BER));
    }
    if (value.highestPriority !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_Priority(value.highestPriority, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CompressedInfo(value, elGetter);
}

/* eslint-enable */
