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
 * @summary CallIdentificationAssignArg
 * @description
 *
 * Data assigned to a new call (ECMA-314 §6.5.1.1). globalCallID identifies
 * the call end-to-end between the two end PINXs (§6.1). threadID optionally
 * links calls that other supplementary services or ANFs have related. legID
 * optionally identifies one leg of the call. All generated elements are sent
 * in the one SETUP invoke.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-314/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallIdentificationAssignArg ::= SEQUENCE {
 *     globalCallID [0] CallIdentificationData,
 *     threadID [1] CallIdentificationData OPTIONAL,
 *     legID [2] CallIdentificationData OPTIONAL,
 *     extension ExtensionType OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CallIdentificationAssignArg {
    /**
     * @summary `globalCallID`.
     * @description
     *
     * End-to-end identification of this call, between the two end PINXs
     * (ECMA-314 §6.1, §6.5.1.1). Generated anew, or as required by an
     * interaction in §6.8, and unique within the PISN.
     * @public
     * @readonly
     */
    readonly globalCallID: CallIdentificationData;
    /**
     * @summary `threadID`.
     * @description
     *
     * Optional identification shared by calls that are logically linked by
     * another supplementary service or ANF (ECMA-314 §6.1, §6.5.1.1). Unique
     * within the PISN when generated.
     * @public
     * @readonly
     */
    readonly threadID: OPTIONAL<CallIdentificationData>;
    /**
     * @summary `legID`.
     * @description
     *
     * Optional identification of one leg of the call (ECMA-314 §6.1).
     * Generated as for the global call data and unique within the PISN
     * (§6.5.1.1).
     * @public
     * @readonly
     */
    readonly legID: OPTIONAL<CallIdentificationData>;
    /**
     * @summary `extension`.
     * @description
     *
     * Manufacturer-specific extension. ECMA-314 §6.3.1 leaves ExampleExtSet
     * empty.
     * @public
     * @readonly
     */
    readonly extension: OPTIONAL<ExtensionType>;

    constructor (
        globalCallID: CallIdentificationData,
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
     * @summary Restructures an object into a CallIdentificationAssignArg
     * @description
     * 
     * This takes an `object` and converts it to a `CallIdentificationAssignArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallIdentificationAssignArg`.
     * @returns {CallIdentificationAssignArg}
     */
    public static _from_object (_o: { [_K in keyof (CallIdentificationAssignArg)]: (CallIdentificationAssignArg)[_K] }): CallIdentificationAssignArg {
        return new CallIdentificationAssignArg(_o.globalCallID, _o.threadID, _o.legID, _o.extension);
    }

}

/**
 * @summary The Leading Root Component Types of CallIdentificationAssignArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallIdentificationAssignArg: $.ComponentSpec[] = [
    new $.ComponentSpec("globalCallID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("threadID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.context, 3), $.hasTag(_TagClass.context, 4)))
];

/**
 * @summary The Trailing Root Component Types of CallIdentificationAssignArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallIdentificationAssignArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallIdentificationAssignArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallIdentificationAssignArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallIdentificationAssignArg: $.ASN1Decoder<CallIdentificationAssignArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallIdentificationAssignArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallIdentificationAssignArg (el: _Element): CallIdentificationAssignArg {
    if (!_cached_decoder_for_CallIdentificationAssignArg) { _cached_decoder_for_CallIdentificationAssignArg = function (el: _Element): CallIdentificationAssignArg {
    let globalCallID!: CallIdentificationData;
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
        _root_component_type_list_1_spec_for_CallIdentificationAssignArg,
        _extension_additions_list_spec_for_CallIdentificationAssignArg,
        _root_component_type_list_2_spec_for_CallIdentificationAssignArg,
        undefined,
    );
    return new CallIdentificationAssignArg(
        globalCallID,
        threadID,
        legID,
        extension
    );
}; }
    return _cached_decoder_for_CallIdentificationAssignArg(el);
}

let _cached_encoder_for_CallIdentificationAssignArg: $.ASN1Encoder<CallIdentificationAssignArg> | null = null;

/**
 * @summary Encodes a(n) CallIdentificationAssignArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallIdentificationAssignArg, encoded as an ASN.1 Element.
 */
export
function _encode_CallIdentificationAssignArg (value: CallIdentificationAssignArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallIdentificationAssignArg) { _cached_encoder_for_CallIdentificationAssignArg = function (value: CallIdentificationAssignArg, _elGetter: $.ASN1Encoder<CallIdentificationAssignArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_CallIdentificationData, $.BER)(value.globalCallID, $.BER));
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
    return _cached_encoder_for_CallIdentificationAssignArg(value, elGetter);
}

/* eslint-enable */
