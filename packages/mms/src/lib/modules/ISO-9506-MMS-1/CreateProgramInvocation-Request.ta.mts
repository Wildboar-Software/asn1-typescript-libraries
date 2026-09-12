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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary CreateProgramInvocation_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CreateProgramInvocation-Request ::= SEQUENCE {
 *    programInvocationName         [0] IMPLICIT Identifier,
 *    listOfDomainNames             [1] IMPLICIT SEQUENCE OF Identifier,
 *    reusable                      [2] IMPLICIT BOOLEAN DEFAULT TRUE
 * ,  monitorType                   [3] IMPLICIT BOOLEAN OPTIONAL
 *                     -- TRUE indicates PERMANENT monitoring,
 *                     -- FALSE indicates CURRENT monitoring
 *    }
 * ```
 * 
 * @class
 */
export
class CreateProgramInvocation_Request {
    constructor (
        /**
         * @summary `programInvocationName`.
         * @public
         * @readonly
         */
        readonly programInvocationName: Identifier,
        /**
         * @summary `listOfDomainNames`.
         * @public
         * @readonly
         */
        readonly listOfDomainNames: Identifier[],
        /**
         * @summary `reusable`.
         * @public
         * @readonly
         */
        readonly reusable: OPTIONAL<BOOLEAN>,
        /**
         * @summary `monitorType`.
         * @public
         * @readonly
         */
        readonly monitorType: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a CreateProgramInvocation_Request
     * @description
     * 
     * This takes an `object` and converts it to a `CreateProgramInvocation_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CreateProgramInvocation_Request`.
     * @returns {CreateProgramInvocation_Request}
     */
    public static _from_object (_o: { [_K in keyof (CreateProgramInvocation_Request)]: (CreateProgramInvocation_Request)[_K] }): CreateProgramInvocation_Request {
        return new CreateProgramInvocation_Request(_o.programInvocationName, _o.listOfDomainNames, _o.reusable, _o.monitorType);
    }

    /**
     * @summary Getter that returns the default value for `reusable`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_reusable () { return true; }
}

/**
 * @summary The Leading Root Component Types of CreateProgramInvocation_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CreateProgramInvocation_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("programInvocationName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("listOfDomainNames", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("reusable", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("monitorType", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of CreateProgramInvocation_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CreateProgramInvocation_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CreateProgramInvocation_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CreateProgramInvocation_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CreateProgramInvocation_Request: $.ASN1Decoder<CreateProgramInvocation_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CreateProgramInvocation_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CreateProgramInvocation_Request (el: _Element): CreateProgramInvocation_Request {
    if (!_cached_decoder_for_CreateProgramInvocation_Request) { _cached_decoder_for_CreateProgramInvocation_Request = function (el: _Element): CreateProgramInvocation_Request {
    let programInvocationName!: Identifier;
    let listOfDomainNames!: Identifier[];
    let reusable: OPTIONAL<BOOLEAN> = CreateProgramInvocation_Request._default_value_for_reusable;
    let monitorType: OPTIONAL<BOOLEAN>;
    const callbacks: $.DecodingMap = {
        "programInvocationName": (_el: _Element): void => { programInvocationName = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "listOfDomainNames": (_el: _Element): void => { listOfDomainNames = $._decode_implicit<Identifier[]>(() => $._decodeSequenceOf<Identifier>(() => _decode_Identifier))(_el); },
        "reusable": (_el: _Element): void => { reusable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "monitorType": (_el: _Element): void => { monitorType = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CreateProgramInvocation_Request,
        _extension_additions_list_spec_for_CreateProgramInvocation_Request,
        _root_component_type_list_2_spec_for_CreateProgramInvocation_Request,
        undefined,
    );
    return new CreateProgramInvocation_Request(
        programInvocationName,
        listOfDomainNames,
        reusable,
        monitorType
    );
}; }
    return _cached_decoder_for_CreateProgramInvocation_Request(el);
}

let _cached_encoder_for_CreateProgramInvocation_Request: $.ASN1Encoder<CreateProgramInvocation_Request> | null = null;

/**
 * @summary Encodes a(n) CreateProgramInvocation_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreateProgramInvocation_Request, encoded as an ASN.1 Element.
 */
export
function _encode_CreateProgramInvocation_Request (value: CreateProgramInvocation_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CreateProgramInvocation_Request) { _cached_encoder_for_CreateProgramInvocation_Request = function (value: CreateProgramInvocation_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.programInvocationName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<Identifier>(() => _encode_Identifier, $.BER), $.BER)(value.listOfDomainNames, $.BER),
            /* IF_DEFAULT */ (value.reusable === undefined || $.deepEq(value.reusable, CreateProgramInvocation_Request._default_value_for_reusable) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.reusable, $.BER)),
            /* IF_ABSENT  */ ((value.monitorType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.monitorType, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CreateProgramInvocation_Request(value, elGetter);
}


/* eslint-enable */
