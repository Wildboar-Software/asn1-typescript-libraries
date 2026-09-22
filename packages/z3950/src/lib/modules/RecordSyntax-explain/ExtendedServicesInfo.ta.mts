/* eslint-disable */
import {
    BOOLEAN,
    EXTERNAL,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
// export { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
import { ExtendedServicesInfo_waitAction, _decode_ExtendedServicesInfo_waitAction, _encode_ExtendedServicesInfo_waitAction } from "../RecordSyntax-explain/ExtendedServicesInfo-waitAction.ta.mjs";
// export { ExtendedServicesInfo_waitAction, ExtendedServicesInfo_waitAction_waitSupported /* IMPORTED_LONG_NAMED_INTEGER */, waitSupported /* IMPORTED_SHORT_NAMED_INTEGER */, ExtendedServicesInfo_waitAction_waitAlways /* IMPORTED_LONG_NAMED_INTEGER */, waitAlways /* IMPORTED_SHORT_NAMED_INTEGER */, ExtendedServicesInfo_waitAction_waitNotSupported /* IMPORTED_LONG_NAMED_INTEGER */, waitNotSupported /* IMPORTED_SHORT_NAMED_INTEGER */, ExtendedServicesInfo_waitAction_depends /* IMPORTED_LONG_NAMED_INTEGER */, depends /* IMPORTED_SHORT_NAMED_INTEGER */, ExtendedServicesInfo_waitAction_notSaying /* IMPORTED_LONG_NAMED_INTEGER */, notSaying /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ExtendedServicesInfo_waitAction, _encode_ExtendedServicesInfo_waitAction } from "../RecordSyntax-explain/ExtendedServicesInfo-waitAction.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";


/**
 * @summary ExtendedServicesInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedServicesInfo ::= SEQUENCE {
 *   commonInfo          [0]    IMPLICIT CommonInfo OPTIONAL,
 *      -- Key elements follow:
 *   type                [1]    IMPLICIT OBJECT IDENTIFIER,
 *      -- Non-key brief elements follow:
 *   name                [2]    IMPLICIT InternationalString OPTIONAL,
 *                              -- should be supplied if privateType is 'true'
 *   privateType         [3]    IMPLICIT BOOLEAN,
 *   restrictionsApply   [5]    IMPLICIT BOOLEAN,  -- if 'true' see 'description'
 *   feeApply            [6]    IMPLICIT BOOLEAN,  -- if 'true' see 'description'
 *   available           [7]    IMPLICIT BOOLEAN,
 *   retentionSupported  [8]    IMPLICIT BOOLEAN,
 *   waitAction          [9]    IMPLICIT INTEGER{
 *                                 waitSupported       (1),
 *                                 waitAlways          (2),
 *                                 waitNotSupported    (3),
 *                                 depends             (4),
 *                                 notSaying           (5)},
 *       -- non-brief elements follow:
 *       -- To get brief plus 'description' use esn 'description'
 *   description         [10]   IMPLICIT HumanString OPTIONAL,
 *       -- to get above elements and 'specificExplain' use esn 
 *       --'specificExplain'
 *   specificExplain     [11]   IMPLICIT EXTERNAL OPTIONAL,
 *                                 -- Use oid of specific ES, and select choice
 *                                 -- [3] 'explain'. Format to be developed in
 *                                 -- conjunction with the specific ES definition.
 *       -- to get all elements except 'specificExplain', use esn 'asn'
 *   esASN               [12]   IMPLICIT InternationalString OPTIONAL 
 *                                 -- the ASN.1 for this ES
 *                         }
 * ```
 * 
 * @class
 */
export
class ExtendedServicesInfo {
    constructor (
        /**
         * @summary `commonInfo`.
         * @public
         * @readonly
         */
        readonly commonInfo: OPTIONAL<CommonInfo>,
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OBJECT_IDENTIFIER,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<InternationalString>,
        /**
         * @summary `privateType`.
         * @public
         * @readonly
         */
        readonly privateType: BOOLEAN,
        /**
         * @summary `restrictionsApply`.
         * @public
         * @readonly
         */
        readonly restrictionsApply: BOOLEAN,
        /**
         * @summary `feeApply`.
         * @public
         * @readonly
         */
        readonly feeApply: BOOLEAN,
        /**
         * @summary `available`.
         * @public
         * @readonly
         */
        readonly available: BOOLEAN,
        /**
         * @summary `retentionSupported`.
         * @public
         * @readonly
         */
        readonly retentionSupported: BOOLEAN,
        /**
         * @summary `waitAction`.
         * @public
         * @readonly
         */
        readonly waitAction: ExtendedServicesInfo_waitAction,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<HumanString>,
        /**
         * @summary `specificExplain`.
         * @public
         * @readonly
         */
        readonly specificExplain: OPTIONAL<EXTERNAL>,
        /**
         * @summary `esASN`.
         * @public
         * @readonly
         */
        readonly esASN: OPTIONAL<InternationalString>
    ) {}

    /**
     * @summary Restructures an object into a ExtendedServicesInfo
     * @description
     * 
     * This takes an `object` and converts it to a `ExtendedServicesInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtendedServicesInfo`.
     * @returns {ExtendedServicesInfo}
     */
    public static _from_object (_o: { [_K in keyof (ExtendedServicesInfo)]: (ExtendedServicesInfo)[_K] }): ExtendedServicesInfo {
        return new ExtendedServicesInfo(_o.commonInfo, _o.type_, _o.name, _o.privateType, _o.restrictionsApply, _o.feeApply, _o.available, _o.retentionSupported, _o.waitAction, _o.description, _o.specificExplain, _o.esASN);
    }


}

/**
 * @summary The Leading Root Component Types of ExtendedServicesInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExtendedServicesInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("commonInfo", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.context, 1)),
    /* FIXME: name COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("privateType", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("restrictionsApply", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("feeApply", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("available", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("retentionSupported", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("waitAction", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("specificExplain", true, $.hasTag(_TagClass.context, 11)),
    /* FIXME: esASN COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of ExtendedServicesInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExtendedServicesInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExtendedServicesInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExtendedServicesInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExtendedServicesInfo: $.ASN1Decoder<ExtendedServicesInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedServicesInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtendedServicesInfo (el: _Element): ExtendedServicesInfo {
    if (!_cached_decoder_for_ExtendedServicesInfo) { _cached_decoder_for_ExtendedServicesInfo = function (el: _Element): ExtendedServicesInfo {
    let commonInfo: OPTIONAL<CommonInfo>;
    let type_!: OBJECT_IDENTIFIER;
    let name: OPTIONAL<InternationalString>;
    let privateType!: BOOLEAN;
    let restrictionsApply!: BOOLEAN;
    let feeApply!: BOOLEAN;
    let available!: BOOLEAN;
    let retentionSupported!: BOOLEAN;
    let waitAction!: ExtendedServicesInfo_waitAction;
    let description: OPTIONAL<HumanString>;
    let specificExplain: OPTIONAL<EXTERNAL>;
    let esASN: OPTIONAL<InternationalString>;
    const callbacks: $.DecodingMap = {
        "commonInfo": (_el: _Element): void => { commonInfo = $._decode_implicit<CommonInfo>(() => _decode_CommonInfo)(_el); },
        "type": (_el: _Element): void => { type_ = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "name": (_el: _Element): void => { name = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "privateType": (_el: _Element): void => { privateType = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "restrictionsApply": (_el: _Element): void => { restrictionsApply = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "feeApply": (_el: _Element): void => { feeApply = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "available": (_el: _Element): void => { available = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "retentionSupported": (_el: _Element): void => { retentionSupported = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "waitAction": (_el: _Element): void => { waitAction = $._decode_implicit<ExtendedServicesInfo_waitAction>(() => _decode_ExtendedServicesInfo_waitAction)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "specificExplain": (_el: _Element): void => { specificExplain = $._decode_implicit<EXTERNAL>(() => $._decodeExternal)(_el); },
        "esASN": (_el: _Element): void => { esASN = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExtendedServicesInfo,
        _extension_additions_list_spec_for_ExtendedServicesInfo,
        _root_component_type_list_2_spec_for_ExtendedServicesInfo,
        undefined,
    );
    return new ExtendedServicesInfo(
        commonInfo,
        type_,
        name,
        privateType,
        restrictionsApply,
        feeApply,
        available,
        retentionSupported,
        waitAction,
        description,
        specificExplain,
        esASN
    );
}; }
    return _cached_decoder_for_ExtendedServicesInfo(el);
}

let _cached_encoder_for_ExtendedServicesInfo: $.ASN1Encoder<ExtendedServicesInfo> | null = null;

/**
 * @summary Encodes a(n) ExtendedServicesInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedServicesInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ExtendedServicesInfo (value: ExtendedServicesInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtendedServicesInfo) { _cached_encoder_for_ExtendedServicesInfo = function (value: ExtendedServicesInfo, elGetter: $.ASN1Encoder<ExtendedServicesInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.commonInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.type_, $.BER),
            /* IF_ABSENT  */ ((value.name === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.name, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.privateType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.restrictionsApply, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.feeApply, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.available, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeBoolean, $.BER)(value.retentionSupported, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_ExtendedServicesInfo_waitAction, $.BER)(value.waitAction, $.BER),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_HumanString, $.BER)(value.description, $.BER)),
            /* IF_ABSENT  */ ((value.specificExplain === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeExternal, $.BER)(value.specificExplain, $.BER)),
            /* IF_ABSENT  */ ((value.esASN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_InternationalString, $.BER)(value.esASN, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ExtendedServicesInfo(value, elGetter);
}


/* eslint-enable */
