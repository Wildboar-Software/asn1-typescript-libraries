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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";


/**
 * @summary ReportAccessControlledObjects_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportAccessControlledObjects-Response ::= SEQUENCE {
 *    listOfNames                [0] IMPLICIT SEQUENCE OF ObjectName,
 *    moreFollows                [1] IMPLICIT BOOLEAN DEFAULT FALSE
 *    }
 * ```
 * 
 * @class
 */
export
class ReportAccessControlledObjects_Response {
    constructor (
        /**
         * @summary `listOfNames`.
         * @public
         * @readonly
         */
        readonly listOfNames: ObjectName[],
        /**
         * @summary `moreFollows`.
         * @public
         * @readonly
         */
        readonly moreFollows: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a ReportAccessControlledObjects_Response
     * @description
     * 
     * This takes an `object` and converts it to a `ReportAccessControlledObjects_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportAccessControlledObjects_Response`.
     * @returns {ReportAccessControlledObjects_Response}
     */
    public static _from_object (_o: { [_K in keyof (ReportAccessControlledObjects_Response)]: (ReportAccessControlledObjects_Response)[_K] }): ReportAccessControlledObjects_Response {
        return new ReportAccessControlledObjects_Response(_o.listOfNames, _o.moreFollows);
    }

    /**
     * @summary Getter that returns the default value for `moreFollows`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_moreFollows () { return false; }
}

/**
 * @summary The Leading Root Component Types of ReportAccessControlledObjects_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReportAccessControlledObjects_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("listOfNames", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("moreFollows", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ReportAccessControlledObjects_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReportAccessControlledObjects_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReportAccessControlledObjects_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReportAccessControlledObjects_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReportAccessControlledObjects_Response: $.ASN1Decoder<ReportAccessControlledObjects_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportAccessControlledObjects_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportAccessControlledObjects_Response (el: _Element): ReportAccessControlledObjects_Response {
    if (!_cached_decoder_for_ReportAccessControlledObjects_Response) { _cached_decoder_for_ReportAccessControlledObjects_Response = function (el: _Element): ReportAccessControlledObjects_Response {
    let listOfNames!: ObjectName[];
    let moreFollows: OPTIONAL<BOOLEAN> = ReportAccessControlledObjects_Response._default_value_for_moreFollows;
    const callbacks: $.DecodingMap = {
        "listOfNames": (_el: _Element): void => { listOfNames = $._decode_implicit<ObjectName[]>(() => $._decodeSequenceOf<ObjectName>(() => _decode_ObjectName))(_el); },
        "moreFollows": (_el: _Element): void => { moreFollows = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReportAccessControlledObjects_Response,
        _extension_additions_list_spec_for_ReportAccessControlledObjects_Response,
        _root_component_type_list_2_spec_for_ReportAccessControlledObjects_Response,
        undefined,
    );
    return new ReportAccessControlledObjects_Response(
        listOfNames,
        moreFollows
    );
}; }
    return _cached_decoder_for_ReportAccessControlledObjects_Response(el);
}

let _cached_encoder_for_ReportAccessControlledObjects_Response: $.ASN1Encoder<ReportAccessControlledObjects_Response> | null = null;

/**
 * @summary Encodes a(n) ReportAccessControlledObjects_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportAccessControlledObjects_Response, encoded as an ASN.1 Element.
 */
export
function _encode_ReportAccessControlledObjects_Response (value: ReportAccessControlledObjects_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportAccessControlledObjects_Response) { _cached_encoder_for_ReportAccessControlledObjects_Response = function (value: ReportAccessControlledObjects_Response): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<ObjectName>(() => _encode_ObjectName, $.BER), $.BER)(value.listOfNames, $.BER),
            /* IF_DEFAULT */ (value.moreFollows === undefined || $.deepEq(value.moreFollows, ReportAccessControlledObjects_Response._default_value_for_moreFollows) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.moreFollows, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReportAccessControlledObjects_Response(value, elGetter);
}


/* eslint-enable */
