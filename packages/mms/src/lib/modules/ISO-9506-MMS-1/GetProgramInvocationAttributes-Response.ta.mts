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
import { ProgramInvocationState, _decode_ProgramInvocationState, _encode_ProgramInvocationState } from "../MMS-Object-Module-1/ProgramInvocationState.ta.mjs";
// export { ProgramInvocationState, ProgramInvocationState_non_existent /* IMPORTED_LONG_NAMED_INTEGER */, non_existent /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_unrunnable /* IMPORTED_LONG_NAMED_INTEGER */, unrunnable /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_running /* IMPORTED_LONG_NAMED_INTEGER */, running /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_stopped /* IMPORTED_LONG_NAMED_INTEGER */, stopped /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_starting /* IMPORTED_LONG_NAMED_INTEGER */, starting /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_stopping /* IMPORTED_LONG_NAMED_INTEGER */, stopping /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_resuming /* IMPORTED_LONG_NAMED_INTEGER */, resuming /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_resetting /* IMPORTED_LONG_NAMED_INTEGER */, resetting /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ProgramInvocationState, _encode_ProgramInvocationState } from "../MMS-Object-Module-1/ProgramInvocationState.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { GetProgramInvocationAttributes_Response_executionArgument, _decode_GetProgramInvocationAttributes_Response_executionArgument, _encode_GetProgramInvocationAttributes_Response_executionArgument } from "../ISO-9506-MMS-1/GetProgramInvocationAttributes-Response-executionArgument.ta.mjs";
// export { GetProgramInvocationAttributes_Response_executionArgument, _decode_GetProgramInvocationAttributes_Response_executionArgument, _encode_GetProgramInvocationAttributes_Response_executionArgument } from "../ISO-9506-MMS-1/GetProgramInvocationAttributes-Response-executionArgument.ta.mjs";


/**
 * @summary GetProgramInvocationAttributes_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetProgramInvocationAttributes-Response ::= SEQUENCE {
 *    state                         [0] IMPLICIT ProgramInvocationState,
 *    listOfDomainNames             [1] IMPLICIT SEQUENCE OF Identifier,
 *    mmsDeletable                  [2] IMPLICIT BOOLEAN,
 *    reusable                      [3] IMPLICIT BOOLEAN,
 *    monitor                       [4] IMPLICIT BOOLEAN,
 *    executionArgument             CHOICE {
 *        simpleString                  [5] IMPLICIT MMSString,
 *        encodedString                 EXTERNAL,
 *        enmbeddedString               EMBEDDED PDV     }
 * ,  accessControlList             [6] IMPLICIT Identifier OPTIONAL
 *              -- Shall not appear in minor version one or two
 *    }
 * ```
 * 
 * @class
 */
export
class GetProgramInvocationAttributes_Response {
    constructor (
        /**
         * @summary `state`.
         * @public
         * @readonly
         */
        readonly state: ProgramInvocationState,
        /**
         * @summary `listOfDomainNames`.
         * @public
         * @readonly
         */
        readonly listOfDomainNames: Identifier[],
        /**
         * @summary `mmsDeletable`.
         * @public
         * @readonly
         */
        readonly mmsDeletable: BOOLEAN,
        /**
         * @summary `reusable`.
         * @public
         * @readonly
         */
        readonly reusable: BOOLEAN,
        /**
         * @summary `monitor`.
         * @public
         * @readonly
         */
        readonly monitor: BOOLEAN,
        /**
         * @summary `executionArgument`.
         * @public
         * @readonly
         */
        readonly executionArgument: GetProgramInvocationAttributes_Response_executionArgument,
        /**
         * @summary `accessControlList`.
         * @public
         * @readonly
         */
        readonly accessControlList: OPTIONAL<Identifier>
    ) {}

    /**
     * @summary Restructures an object into a GetProgramInvocationAttributes_Response
     * @description
     * 
     * This takes an `object` and converts it to a `GetProgramInvocationAttributes_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetProgramInvocationAttributes_Response`.
     * @returns {GetProgramInvocationAttributes_Response}
     */
    public static _from_object (_o: { [_K in keyof (GetProgramInvocationAttributes_Response)]: (GetProgramInvocationAttributes_Response)[_K] }): GetProgramInvocationAttributes_Response {
        return new GetProgramInvocationAttributes_Response(_o.state, _o.listOfDomainNames, _o.mmsDeletable, _o.reusable, _o.monitor, _o.executionArgument, _o.accessControlList);
    }


}

/**
 * @summary The Leading Root Component Types of GetProgramInvocationAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetProgramInvocationAttributes_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("state", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("listOfDomainNames", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mmsDeletable", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("reusable", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("monitor", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("executionArgument", false, $.hasAnyTag),
    new $.ComponentSpec("accessControlList", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of GetProgramInvocationAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetProgramInvocationAttributes_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetProgramInvocationAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetProgramInvocationAttributes_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetProgramInvocationAttributes_Response: $.ASN1Decoder<GetProgramInvocationAttributes_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetProgramInvocationAttributes_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetProgramInvocationAttributes_Response (el: _Element): GetProgramInvocationAttributes_Response {
    if (!_cached_decoder_for_GetProgramInvocationAttributes_Response) { _cached_decoder_for_GetProgramInvocationAttributes_Response = function (el: _Element): GetProgramInvocationAttributes_Response {
    let state!: ProgramInvocationState;
    let listOfDomainNames!: Identifier[];
    let mmsDeletable!: BOOLEAN;
    let reusable!: BOOLEAN;
    let monitor!: BOOLEAN;
    let executionArgument!: GetProgramInvocationAttributes_Response_executionArgument;
    let accessControlList: OPTIONAL<Identifier>;
    const callbacks: $.DecodingMap = {
        "state": (_el: _Element): void => { state = $._decode_implicit<ProgramInvocationState>(() => _decode_ProgramInvocationState)(_el); },
        "listOfDomainNames": (_el: _Element): void => { listOfDomainNames = $._decode_implicit<Identifier[]>(() => $._decodeSequenceOf<Identifier>(() => _decode_Identifier))(_el); },
        "mmsDeletable": (_el: _Element): void => { mmsDeletable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "reusable": (_el: _Element): void => { reusable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "monitor": (_el: _Element): void => { monitor = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "executionArgument": (_el: _Element): void => { executionArgument = _decode_GetProgramInvocationAttributes_Response_executionArgument(_el); },
        "accessControlList": (_el: _Element): void => { accessControlList = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetProgramInvocationAttributes_Response,
        _extension_additions_list_spec_for_GetProgramInvocationAttributes_Response,
        _root_component_type_list_2_spec_for_GetProgramInvocationAttributes_Response,
        undefined,
    );
    return new GetProgramInvocationAttributes_Response(
        state,
        listOfDomainNames,
        mmsDeletable,
        reusable,
        monitor,
        executionArgument,
        accessControlList
    );
}; }
    return _cached_decoder_for_GetProgramInvocationAttributes_Response(el);
}

let _cached_encoder_for_GetProgramInvocationAttributes_Response: $.ASN1Encoder<GetProgramInvocationAttributes_Response> | null = null;

/**
 * @summary Encodes a(n) GetProgramInvocationAttributes_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetProgramInvocationAttributes_Response, encoded as an ASN.1 Element.
 */
export
function _encode_GetProgramInvocationAttributes_Response (value: GetProgramInvocationAttributes_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetProgramInvocationAttributes_Response) { _cached_encoder_for_GetProgramInvocationAttributes_Response = function (value: GetProgramInvocationAttributes_Response): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ProgramInvocationState, $.BER)(value.state, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<Identifier>(() => _encode_Identifier, $.BER), $.BER)(value.listOfDomainNames, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.mmsDeletable, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.reusable, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.monitor, $.BER),
            /* REQUIRED   */ _encode_GetProgramInvocationAttributes_Response_executionArgument(value.executionArgument, $.BER),
            /* IF_ABSENT  */ ((value.accessControlList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_Identifier, $.BER)(value.accessControlList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetProgramInvocationAttributes_Response(value, elGetter);
}


/* eslint-enable */
