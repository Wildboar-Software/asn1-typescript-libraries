/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
import { OperationProgress, _decode_OperationProgress, _encode_OperationProgress } from "../DistributedOperations/OperationProgress.ta.mjs";
// export { OperationProgress, _decode_OperationProgress, _encode_OperationProgress } from "../DistributedOperations/OperationProgress.ta.mjs";


/**
 * @summary TraceItem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceItem ::= SET {
 *   dsa                [0]  Name,
 *   targetObject       [1]  Name OPTIONAL,
 *   operationProgress  [2]  OperationProgress
 * }
 * ```
 * 
 * @class
 */
export
class TraceItem {
    /**
     * @summary `dsa`.
     * @public
     * @readonly
     */
    readonly dsa: Name;
    /**
     * @summary `targetObject`.
     * @public
     * @readonly
     */
    readonly targetObject: OPTIONAL<Name>;
    /**
     * @summary `operationProgress`.
     * @public
     * @readonly
     */
    readonly operationProgress: OperationProgress;

    constructor (
        dsa: Name,
        targetObject: OPTIONAL<Name>,
        operationProgress: OperationProgress
    ) {
        this.dsa = dsa;
        this.targetObject = targetObject;
        this.operationProgress = operationProgress;
    }

    /**
     * @summary Restructures an object into a TraceItem
     * @description
     * 
     * This takes an `object` and converts it to a `TraceItem`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TraceItem`.
     * @returns {TraceItem}
     */
    public static _from_object (_o: { [_K in keyof (TraceItem)]: (TraceItem)[_K] }): TraceItem {
        return new TraceItem(_o.dsa, _o.targetObject, _o.operationProgress);
    }


}

/**
 * @summary The Leading Root Component Types of TraceItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TraceItem: $.ComponentSpec[] = [
    new $.ComponentSpec("dsa", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("targetObject", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("operationProgress", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TraceItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TraceItem: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TraceItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TraceItem: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TraceItem: $.ASN1Decoder<TraceItem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TraceItem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TraceItem (el: _Element): TraceItem {
    if (!_cached_decoder_for_TraceItem) { _cached_decoder_for_TraceItem = function (el: _Element): TraceItem {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let dsa!: Name;
    let targetObject: OPTIONAL<Name>;
    let operationProgress!: OperationProgress;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "dsa": (_el: _Element): void => { dsa = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "targetObject": (_el: _Element): void => { targetObject = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "operationProgress": (_el: _Element): void => { operationProgress = $._decode_explicit<OperationProgress>(() => _decode_OperationProgress)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_TraceItem,
        _extension_additions_list_spec_for_TraceItem,
        _root_component_type_list_2_spec_for_TraceItem,
        undefined,
    );
    return new TraceItem( /* SET_CONSTRUCTOR_CALL */
        dsa,
        targetObject,
        operationProgress
    );
}; }
    return _cached_decoder_for_TraceItem(el);
}

let _cached_encoder_for_TraceItem: $.ASN1Encoder<TraceItem> | null = null;

/**
 * @summary Encodes a(n) TraceItem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceItem, encoded as an ASN.1 Element.
 */
export
function _encode_TraceItem (value: TraceItem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TraceItem) { _cached_encoder_for_TraceItem = function (value: TraceItem, elGetter: $.ASN1Encoder<TraceItem>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Name, $.BER)(value.dsa, $.BER));
    if (value.targetObject !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_Name, $.BER)(value.targetObject, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_OperationProgress, $.BER)(value.operationProgress, $.BER));
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_TraceItem(value, elGetter);
}


/* eslint-enable */
