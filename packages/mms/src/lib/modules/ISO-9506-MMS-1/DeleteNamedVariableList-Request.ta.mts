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
import { DeleteNamedVariableList_Request_scopeOfDelete, specific /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DeleteNamedVariableList_Request_scopeOfDelete, _encode_DeleteNamedVariableList_Request_scopeOfDelete } from "../ISO-9506-MMS-1/DeleteNamedVariableList-Request-scopeOfDelete.ta.mjs";
// export { DeleteNamedVariableList_Request_scopeOfDelete, DeleteNamedVariableList_Request_scopeOfDelete_specific /* IMPORTED_LONG_NAMED_INTEGER */, specific /* IMPORTED_SHORT_NAMED_INTEGER */, DeleteNamedVariableList_Request_scopeOfDelete_aa_specific /* IMPORTED_LONG_NAMED_INTEGER */, aa_specific /* IMPORTED_SHORT_NAMED_INTEGER */, DeleteNamedVariableList_Request_scopeOfDelete_domain /* IMPORTED_LONG_NAMED_INTEGER */, domain /* IMPORTED_SHORT_NAMED_INTEGER */, DeleteNamedVariableList_Request_scopeOfDelete_vmd /* IMPORTED_LONG_NAMED_INTEGER */, vmd /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DeleteNamedVariableList_Request_scopeOfDelete, _encode_DeleteNamedVariableList_Request_scopeOfDelete } from "../ISO-9506-MMS-1/DeleteNamedVariableList-Request-scopeOfDelete.ta.mjs";
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary DeleteNamedVariableList_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteNamedVariableList-Request ::= SEQUENCE {
 *    scopeOfDelete          [0] IMPLICIT INTEGER {
 *        specific               (0),
 *        aa-specific            (1),
 *        domain                 (2),
 *        vmd                    (3)
 *        } (0..3) DEFAULT specific,
 *    listOfVariableListName [1] IMPLICIT SEQUENCE OF ObjectName OPTIONAL,
 *    domainName             [2] IMPLICIT Identifier OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DeleteNamedVariableList_Request {
    constructor (
        /**
         * @summary `scopeOfDelete`.
         * @public
         * @readonly
         */
        readonly scopeOfDelete: OPTIONAL<DeleteNamedVariableList_Request_scopeOfDelete>,
        /**
         * @summary `listOfVariableListName`.
         * @public
         * @readonly
         */
        readonly listOfVariableListName: OPTIONAL<ObjectName[]>,
        /**
         * @summary `domainName`.
         * @public
         * @readonly
         */
        readonly domainName: OPTIONAL<Identifier>
    ) {}

    /**
     * @summary Restructures an object into a DeleteNamedVariableList_Request
     * @description
     * 
     * This takes an `object` and converts it to a `DeleteNamedVariableList_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeleteNamedVariableList_Request`.
     * @returns {DeleteNamedVariableList_Request}
     */
    public static _from_object (_o: { [_K in keyof (DeleteNamedVariableList_Request)]: (DeleteNamedVariableList_Request)[_K] }): DeleteNamedVariableList_Request {
        return new DeleteNamedVariableList_Request(_o.scopeOfDelete, _o.listOfVariableListName, _o.domainName);
    }

    /**
     * @summary Getter that returns the default value for `scopeOfDelete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_scopeOfDelete () { return specific; }
}

/**
 * @summary The Leading Root Component Types of DeleteNamedVariableList_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeleteNamedVariableList_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("scopeOfDelete", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("listOfVariableListName", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("domainName", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of DeleteNamedVariableList_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeleteNamedVariableList_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeleteNamedVariableList_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeleteNamedVariableList_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeleteNamedVariableList_Request: $.ASN1Decoder<DeleteNamedVariableList_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteNamedVariableList_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteNamedVariableList_Request (el: _Element): DeleteNamedVariableList_Request {
    if (!_cached_decoder_for_DeleteNamedVariableList_Request) { _cached_decoder_for_DeleteNamedVariableList_Request = function (el: _Element): DeleteNamedVariableList_Request {
    let scopeOfDelete: OPTIONAL<DeleteNamedVariableList_Request_scopeOfDelete> = DeleteNamedVariableList_Request._default_value_for_scopeOfDelete;
    let listOfVariableListName: OPTIONAL<ObjectName[]>;
    let domainName: OPTIONAL<Identifier>;
    const callbacks: $.DecodingMap = {
        "scopeOfDelete": (_el: _Element): void => { scopeOfDelete = $._decode_implicit<DeleteNamedVariableList_Request_scopeOfDelete>(() => _decode_DeleteNamedVariableList_Request_scopeOfDelete)(_el); },
        "listOfVariableListName": (_el: _Element): void => { listOfVariableListName = $._decode_implicit<ObjectName[]>(() => $._decodeSequenceOf<ObjectName>(() => _decode_ObjectName))(_el); },
        "domainName": (_el: _Element): void => { domainName = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DeleteNamedVariableList_Request,
        _extension_additions_list_spec_for_DeleteNamedVariableList_Request,
        _root_component_type_list_2_spec_for_DeleteNamedVariableList_Request,
        undefined,
    );
    return new DeleteNamedVariableList_Request(
        scopeOfDelete,
        listOfVariableListName,
        domainName
    );
}; }
    return _cached_decoder_for_DeleteNamedVariableList_Request(el);
}

let _cached_encoder_for_DeleteNamedVariableList_Request: $.ASN1Encoder<DeleteNamedVariableList_Request> | null = null;

/**
 * @summary Encodes a(n) DeleteNamedVariableList_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteNamedVariableList_Request, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteNamedVariableList_Request (value: DeleteNamedVariableList_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteNamedVariableList_Request) { _cached_encoder_for_DeleteNamedVariableList_Request = function (value: DeleteNamedVariableList_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.scopeOfDelete === undefined || $.deepEq(value.scopeOfDelete, DeleteNamedVariableList_Request._default_value_for_scopeOfDelete) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_DeleteNamedVariableList_Request_scopeOfDelete, $.BER)(value.scopeOfDelete, $.BER)),
            /* IF_ABSENT  */ ((value.listOfVariableListName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ObjectName>(() => _encode_ObjectName, $.BER), $.BER)(value.listOfVariableListName, $.BER)),
            /* IF_ABSENT  */ ((value.domainName === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_Identifier, $.BER)(value.domainName, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DeleteNamedVariableList_Request(value, elGetter);
}


/* eslint-enable */
