/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
import { DomainState, _decode_DomainState, _encode_DomainState } from "../MMS-Object-Module-1/DomainState.ta.mjs";
// export { DomainState, DomainState_non_existent /* IMPORTED_LONG_NAMED_INTEGER */, non_existent /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_loading /* IMPORTED_LONG_NAMED_INTEGER */, loading /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_ready /* IMPORTED_LONG_NAMED_INTEGER */, ready /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_in_use /* IMPORTED_LONG_NAMED_INTEGER */, in_use /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_complete /* IMPORTED_LONG_NAMED_INTEGER */, complete /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_incomplete /* IMPORTED_LONG_NAMED_INTEGER */, incomplete /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d1 /* IMPORTED_LONG_NAMED_INTEGER */, d1 /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d2 /* IMPORTED_LONG_NAMED_INTEGER */, d2 /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d3 /* IMPORTED_LONG_NAMED_INTEGER */, d3 /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d4 /* IMPORTED_LONG_NAMED_INTEGER */, d4 /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d5 /* IMPORTED_LONG_NAMED_INTEGER */, d5 /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d6 /* IMPORTED_LONG_NAMED_INTEGER */, d6 /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d7 /* IMPORTED_LONG_NAMED_INTEGER */, d7 /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d8 /* IMPORTED_LONG_NAMED_INTEGER */, d8 /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d9 /* IMPORTED_LONG_NAMED_INTEGER */, d9 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DomainState, _encode_DomainState } from "../MMS-Object-Module-1/DomainState.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { Integer8, _decode_Integer8, _encode_Integer8 } from "../ISO-9506-MMS-1/Integer8.ta.mjs";
// export { Integer8, _decode_Integer8, _encode_Integer8 } from "../ISO-9506-MMS-1/Integer8.ta.mjs";


/**
 * @summary GetDomainAttributes_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetDomainAttributes-Response ::= SEQUENCE {
 *    listOfCapabilities            [0] IMPLICIT SEQUENCE OF MMSString,
 *    state                         [1] IMPLICIT DomainState,
 *    mmsDeletable                  [2] IMPLICIT BOOLEAN,
 *    sharable                      [3] IMPLICIT BOOLEAN,
 *    listOfProgramInvocations      [4] IMPLICIT SEQUENCE OF Identifier,
 *                               -- Program Invocation Names
 *    uploadInProgress              [5] IMPLICIT Integer8
 * ,  accessControlList             [6] IMPLICIT Identifier OPTIONAL
 *                        -- Shall not appear in minor version one or two
 *    }
 * ```
 * 
 * @class
 */
export
class GetDomainAttributes_Response {
    constructor (
        /**
         * @summary `listOfCapabilities`.
         * @public
         * @readonly
         */
        readonly listOfCapabilities: MMSString[],
        /**
         * @summary `state`.
         * @public
         * @readonly
         */
        readonly state: DomainState,
        /**
         * @summary `mmsDeletable`.
         * @public
         * @readonly
         */
        readonly mmsDeletable: BOOLEAN,
        /**
         * @summary `sharable`.
         * @public
         * @readonly
         */
        readonly sharable: BOOLEAN,
        /**
         * @summary `listOfProgramInvocations`.
         * @public
         * @readonly
         */
        readonly listOfProgramInvocations: Identifier[],
        /**
         * @summary `uploadInProgress`.
         * @public
         * @readonly
         */
        readonly uploadInProgress: Integer8,
        /**
         * @summary `accessControlList`.
         * @public
         * @readonly
         */
        readonly accessControlList: OPTIONAL<Identifier>
    ) {}

    /**
     * @summary Restructures an object into a GetDomainAttributes_Response
     * @description
     * 
     * This takes an `object` and converts it to a `GetDomainAttributes_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetDomainAttributes_Response`.
     * @returns {GetDomainAttributes_Response}
     */
    public static _from_object (_o: { [_K in keyof (GetDomainAttributes_Response)]: (GetDomainAttributes_Response)[_K] }): GetDomainAttributes_Response {
        return new GetDomainAttributes_Response(_o.listOfCapabilities, _o.state, _o.mmsDeletable, _o.sharable, _o.listOfProgramInvocations, _o.uploadInProgress, _o.accessControlList);
    }


}

/**
 * @summary The Leading Root Component Types of GetDomainAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetDomainAttributes_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("listOfCapabilities", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("state", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mmsDeletable", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sharable", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("listOfProgramInvocations", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("uploadInProgress", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("accessControlList", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of GetDomainAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetDomainAttributes_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetDomainAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetDomainAttributes_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetDomainAttributes_Response: $.ASN1Decoder<GetDomainAttributes_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetDomainAttributes_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetDomainAttributes_Response (el: _Element): GetDomainAttributes_Response {
    if (!_cached_decoder_for_GetDomainAttributes_Response) { _cached_decoder_for_GetDomainAttributes_Response = function (el: _Element): GetDomainAttributes_Response {
    let listOfCapabilities!: MMSString[];
    let state!: DomainState;
    let mmsDeletable!: BOOLEAN;
    let sharable!: BOOLEAN;
    let listOfProgramInvocations!: Identifier[];
    let uploadInProgress!: Integer8;
    let accessControlList: OPTIONAL<Identifier>;
    const callbacks: $.DecodingMap = {
        "listOfCapabilities": (_el: _Element): void => { listOfCapabilities = $._decode_implicit<MMSString[]>(() => $._decodeSequenceOf<MMSString>(() => _decode_MMSString))(_el); },
        "state": (_el: _Element): void => { state = $._decode_implicit<DomainState>(() => _decode_DomainState)(_el); },
        "mmsDeletable": (_el: _Element): void => { mmsDeletable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "sharable": (_el: _Element): void => { sharable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "listOfProgramInvocations": (_el: _Element): void => { listOfProgramInvocations = $._decode_implicit<Identifier[]>(() => $._decodeSequenceOf<Identifier>(() => _decode_Identifier))(_el); },
        "uploadInProgress": (_el: _Element): void => { uploadInProgress = $._decode_implicit<Integer8>(() => _decode_Integer8)(_el); },
        "accessControlList": (_el: _Element): void => { accessControlList = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetDomainAttributes_Response,
        _extension_additions_list_spec_for_GetDomainAttributes_Response,
        _root_component_type_list_2_spec_for_GetDomainAttributes_Response,
        undefined,
    );
    return new GetDomainAttributes_Response(
        listOfCapabilities,
        state,
        mmsDeletable,
        sharable,
        listOfProgramInvocations,
        uploadInProgress,
        accessControlList
    );
}; }
    return _cached_decoder_for_GetDomainAttributes_Response(el);
}

let _cached_encoder_for_GetDomainAttributes_Response: $.ASN1Encoder<GetDomainAttributes_Response> | null = null;

/**
 * @summary Encodes a(n) GetDomainAttributes_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetDomainAttributes_Response, encoded as an ASN.1 Element.
 */
export
function _encode_GetDomainAttributes_Response (value: GetDomainAttributes_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetDomainAttributes_Response) { _cached_encoder_for_GetDomainAttributes_Response = function (value: GetDomainAttributes_Response): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<MMSString>(() => _encode_MMSString, $.BER), $.BER)(value.listOfCapabilities, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_DomainState, $.BER)(value.state, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.mmsDeletable, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.sharable, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<Identifier>(() => _encode_Identifier, $.BER), $.BER)(value.listOfProgramInvocations, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_Integer8, $.BER)(value.uploadInProgress, $.BER),
            /* IF_ABSENT  */ ((value.accessControlList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_Identifier, $.BER)(value.accessControlList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetDomainAttributes_Response(value, elGetter);
}


/* eslint-enable */
