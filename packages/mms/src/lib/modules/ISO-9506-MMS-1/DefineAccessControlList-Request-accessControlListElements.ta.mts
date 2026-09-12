/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AccessCondition, _decode_AccessCondition, _encode_AccessCondition } from "../MMS-Object-Module-1/AccessCondition.ta.mjs";
// export { AccessCondition, _decode_AccessCondition, _encode_AccessCondition } from "../MMS-Object-Module-1/AccessCondition.ta.mjs";


/**
 * @summary DefineAccessControlList_Request_accessControlListElements
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefineAccessControlList-Request-accessControlListElements ::= SEQUENCE {
 *     readAccessCondition [0] AccessCondition OPTIONAL,
 *     storeAccessCondition [1] AccessCondition OPTIONAL,
 *     writeAccessCondition [2] AccessCondition OPTIONAL,
 *     loadAccessCondition [3] AccessCondition OPTIONAL,
 *     executeAccessCondition [4] AccessCondition OPTIONAL,
 *     deleteAccessCondition [5] AccessCondition OPTIONAL,
 *     editAccessCondition [6] AccessCondition OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DefineAccessControlList_Request_accessControlListElements {
    constructor (
        /**
         * @summary `readAccessCondition`.
         * @public
         * @readonly
         */
        readonly readAccessCondition: OPTIONAL<AccessCondition>,
        /**
         * @summary `storeAccessCondition`.
         * @public
         * @readonly
         */
        readonly storeAccessCondition: OPTIONAL<AccessCondition>,
        /**
         * @summary `writeAccessCondition`.
         * @public
         * @readonly
         */
        readonly writeAccessCondition: OPTIONAL<AccessCondition>,
        /**
         * @summary `loadAccessCondition`.
         * @public
         * @readonly
         */
        readonly loadAccessCondition: OPTIONAL<AccessCondition>,
        /**
         * @summary `executeAccessCondition`.
         * @public
         * @readonly
         */
        readonly executeAccessCondition: OPTIONAL<AccessCondition>,
        /**
         * @summary `deleteAccessCondition`.
         * @public
         * @readonly
         */
        readonly deleteAccessCondition: OPTIONAL<AccessCondition>,
        /**
         * @summary `editAccessCondition`.
         * @public
         * @readonly
         */
        readonly editAccessCondition: OPTIONAL<AccessCondition>
    ) {}

    /**
     * @summary Restructures an object into a DefineAccessControlList_Request_accessControlListElements
     * @description
     * 
     * This takes an `object` and converts it to a `DefineAccessControlList_Request_accessControlListElements`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DefineAccessControlList_Request_accessControlListElements`.
     * @returns {DefineAccessControlList_Request_accessControlListElements}
     */
    public static _from_object (_o: { [_K in keyof (DefineAccessControlList_Request_accessControlListElements)]: (DefineAccessControlList_Request_accessControlListElements)[_K] }): DefineAccessControlList_Request_accessControlListElements {
        return new DefineAccessControlList_Request_accessControlListElements(_o.readAccessCondition, _o.storeAccessCondition, _o.writeAccessCondition, _o.loadAccessCondition, _o.executeAccessCondition, _o.deleteAccessCondition, _o.editAccessCondition);
    }


}

/**
 * @summary The Leading Root Component Types of DefineAccessControlList_Request_accessControlListElements
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DefineAccessControlList_Request_accessControlListElements: $.ComponentSpec[] = [
    new $.ComponentSpec("readAccessCondition", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("storeAccessCondition", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("writeAccessCondition", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("loadAccessCondition", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("executeAccessCondition", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("deleteAccessCondition", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("editAccessCondition", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of DefineAccessControlList_Request_accessControlListElements
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DefineAccessControlList_Request_accessControlListElements: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DefineAccessControlList_Request_accessControlListElements
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DefineAccessControlList_Request_accessControlListElements: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DefineAccessControlList_Request_accessControlListElements: $.ASN1Decoder<DefineAccessControlList_Request_accessControlListElements> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DefineAccessControlList_Request_accessControlListElements
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DefineAccessControlList_Request_accessControlListElements (el: _Element): DefineAccessControlList_Request_accessControlListElements {
    if (!_cached_decoder_for_DefineAccessControlList_Request_accessControlListElements) { _cached_decoder_for_DefineAccessControlList_Request_accessControlListElements = function (el: _Element): DefineAccessControlList_Request_accessControlListElements {
    let readAccessCondition: OPTIONAL<AccessCondition>;
    let storeAccessCondition: OPTIONAL<AccessCondition>;
    let writeAccessCondition: OPTIONAL<AccessCondition>;
    let loadAccessCondition: OPTIONAL<AccessCondition>;
    let executeAccessCondition: OPTIONAL<AccessCondition>;
    let deleteAccessCondition: OPTIONAL<AccessCondition>;
    let editAccessCondition: OPTIONAL<AccessCondition>;
    const callbacks: $.DecodingMap = {
        "readAccessCondition": (_el: _Element): void => { readAccessCondition = $._decode_explicit<AccessCondition>(() => _decode_AccessCondition)(_el); },
        "storeAccessCondition": (_el: _Element): void => { storeAccessCondition = $._decode_explicit<AccessCondition>(() => _decode_AccessCondition)(_el); },
        "writeAccessCondition": (_el: _Element): void => { writeAccessCondition = $._decode_explicit<AccessCondition>(() => _decode_AccessCondition)(_el); },
        "loadAccessCondition": (_el: _Element): void => { loadAccessCondition = $._decode_explicit<AccessCondition>(() => _decode_AccessCondition)(_el); },
        "executeAccessCondition": (_el: _Element): void => { executeAccessCondition = $._decode_explicit<AccessCondition>(() => _decode_AccessCondition)(_el); },
        "deleteAccessCondition": (_el: _Element): void => { deleteAccessCondition = $._decode_explicit<AccessCondition>(() => _decode_AccessCondition)(_el); },
        "editAccessCondition": (_el: _Element): void => { editAccessCondition = $._decode_explicit<AccessCondition>(() => _decode_AccessCondition)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DefineAccessControlList_Request_accessControlListElements,
        _extension_additions_list_spec_for_DefineAccessControlList_Request_accessControlListElements,
        _root_component_type_list_2_spec_for_DefineAccessControlList_Request_accessControlListElements,
        undefined,
    );
    return new DefineAccessControlList_Request_accessControlListElements(
        readAccessCondition,
        storeAccessCondition,
        writeAccessCondition,
        loadAccessCondition,
        executeAccessCondition,
        deleteAccessCondition,
        editAccessCondition
    );
}; }
    return _cached_decoder_for_DefineAccessControlList_Request_accessControlListElements(el);
}

let _cached_encoder_for_DefineAccessControlList_Request_accessControlListElements: $.ASN1Encoder<DefineAccessControlList_Request_accessControlListElements> | null = null;

/**
 * @summary Encodes a(n) DefineAccessControlList_Request_accessControlListElements into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefineAccessControlList_Request_accessControlListElements, encoded as an ASN.1 Element.
 */
export
function _encode_DefineAccessControlList_Request_accessControlListElements (value: DefineAccessControlList_Request_accessControlListElements, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DefineAccessControlList_Request_accessControlListElements) { _cached_encoder_for_DefineAccessControlList_Request_accessControlListElements = function (value: DefineAccessControlList_Request_accessControlListElements): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.readAccessCondition === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_AccessCondition, $.BER)(value.readAccessCondition, $.BER)),
            /* IF_ABSENT  */ ((value.storeAccessCondition === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_AccessCondition, $.BER)(value.storeAccessCondition, $.BER)),
            /* IF_ABSENT  */ ((value.writeAccessCondition === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_AccessCondition, $.BER)(value.writeAccessCondition, $.BER)),
            /* IF_ABSENT  */ ((value.loadAccessCondition === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_AccessCondition, $.BER)(value.loadAccessCondition, $.BER)),
            /* IF_ABSENT  */ ((value.executeAccessCondition === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_AccessCondition, $.BER)(value.executeAccessCondition, $.BER)),
            /* IF_ABSENT  */ ((value.deleteAccessCondition === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_AccessCondition, $.BER)(value.deleteAccessCondition, $.BER)),
            /* IF_ABSENT  */ ((value.editAccessCondition === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_AccessCondition, $.BER)(value.editAccessCondition, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DefineAccessControlList_Request_accessControlListElements(value, elGetter);
}


/* eslint-enable */
