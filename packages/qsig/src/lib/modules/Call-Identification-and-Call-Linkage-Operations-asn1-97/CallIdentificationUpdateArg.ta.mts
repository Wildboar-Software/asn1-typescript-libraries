/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallIdentificationData, _decode_CallIdentificationData, _encode_CallIdentificationData } from "../Call-Identification-and-Call-Linkage-Operations-asn1-97/CallIdentificationData.ta.mjs";
import { ExtensionType, _decode_ExtensionType, _encode_ExtensionType } from "../Call-Identification-and-Call-Linkage-Operations-asn1-97/ExtensionType.ta.mjs";

/**
 * @summary CallIdentificationUpdateArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallIdentificationUpdateArg ::= SEQUENCE {
 *     globalCallID [0] CallIdentificationData OPTIONAL,
 *     threadID [1] CallIdentificationData OPTIONAL,
 *     legID [2] CallIdentificationData OPTIONAL,
 *     extension ExtensionType OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CallIdentificationUpdateArg {
    /**
     * @summary `globalCallID`.
     * @public
     * @readonly
     */
    readonly globalCallID: OPTIONAL<CallIdentificationData>;
    /**
     * @summary `threadID`.
     * @public
     * @readonly
     */
    readonly threadID: OPTIONAL<CallIdentificationData>;
    /**
     * @summary `legID`.
     * @public
     * @readonly
     */
    readonly legID: OPTIONAL<CallIdentificationData>;
    /**
     * @summary `extension`.
     * @public
     * @readonly
     */
    readonly extension: OPTIONAL<ExtensionType>;

    constructor (
        globalCallID: OPTIONAL<CallIdentificationData>,
        threadID: OPTIONAL<CallIdentificationData>,
        legID: OPTIONAL<CallIdentificationData>,
        extension: OPTIONAL<ExtensionType>
    ) {
        this.globalCallID = globalCallID;
        this.threadID = threadID;
        this.legID = legID;
        this.extension = extension;
    }

    /**
     * @summary Restructures an object into a CallIdentificationUpdateArg
     * @description
     * 
     * This takes an `object` and converts it to a `CallIdentificationUpdateArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallIdentificationUpdateArg`.
     * @returns {CallIdentificationUpdateArg}
     */
    public static _from_object (_o: { [_K in keyof (CallIdentificationUpdateArg)]: (CallIdentificationUpdateArg)[_K] }): CallIdentificationUpdateArg {
        return new CallIdentificationUpdateArg(_o.globalCallID, _o.threadID, _o.legID, _o.extension);
    }

}

/**
 * @summary The Leading Root Component Types of CallIdentificationUpdateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallIdentificationUpdateArg: $.ComponentSpec[] = [
    new $.ComponentSpec("globalCallID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("threadID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.context, 3), $.hasTag(_TagClass.context, 4)))
];

/**
 * @summary The Trailing Root Component Types of CallIdentificationUpdateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallIdentificationUpdateArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallIdentificationUpdateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallIdentificationUpdateArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallIdentificationUpdateArg: $.ASN1Decoder<CallIdentificationUpdateArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallIdentificationUpdateArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallIdentificationUpdateArg (el: _Element): CallIdentificationUpdateArg {
    if (!_cached_decoder_for_CallIdentificationUpdateArg) { _cached_decoder_for_CallIdentificationUpdateArg = function (el: _Element): CallIdentificationUpdateArg {
    let globalCallID: OPTIONAL<CallIdentificationData>;
    let threadID: OPTIONAL<CallIdentificationData>;
    let legID: OPTIONAL<CallIdentificationData>;
    let extension: OPTIONAL<ExtensionType>;
    const callbacks: $.DecodingMap = {
        "globalCallID": (_el: _Element): void => { globalCallID = $._decode_explicit<CallIdentificationData>(() => _decode_CallIdentificationData)(_el); },
        "threadID": (_el: _Element): void => { threadID = $._decode_explicit<CallIdentificationData>(() => _decode_CallIdentificationData)(_el); },
        "legID": (_el: _Element): void => { legID = $._decode_explicit<CallIdentificationData>(() => _decode_CallIdentificationData)(_el); },
        "extension": (_el: _Element): void => { extension = _decode_ExtensionType(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallIdentificationUpdateArg,
        _extension_additions_list_spec_for_CallIdentificationUpdateArg,
        _root_component_type_list_2_spec_for_CallIdentificationUpdateArg,
        undefined,
    );
    return new CallIdentificationUpdateArg(
        globalCallID,
        threadID,
        legID,
        extension
    );
}; }
    return _cached_decoder_for_CallIdentificationUpdateArg(el);
}

let _cached_encoder_for_CallIdentificationUpdateArg: $.ASN1Encoder<CallIdentificationUpdateArg> | null = null;

/**
 * @summary Encodes a(n) CallIdentificationUpdateArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallIdentificationUpdateArg, encoded as an ASN.1 Element.
 */
export
function _encode_CallIdentificationUpdateArg (value: CallIdentificationUpdateArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallIdentificationUpdateArg) { _cached_encoder_for_CallIdentificationUpdateArg = function (value: CallIdentificationUpdateArg, elGetter: $.ASN1Encoder<CallIdentificationUpdateArg>): _Element {
    const _components: _Element[] = [];
    if (value.globalCallID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_CallIdentificationData, $.BER)(value.globalCallID, $.BER));
    }
    if (value.threadID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_CallIdentificationData, $.BER)(value.threadID, $.BER));
    }
    if (value.legID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_CallIdentificationData, $.BER)(value.legID, $.BER));
    }
    if (value.extension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_ExtensionType(value.extension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CallIdentificationUpdateArg(value, elGetter);
}

/* eslint-enable */
